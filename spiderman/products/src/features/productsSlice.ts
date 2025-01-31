import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import axios, {AxiosError} from "axios";
import {Products} from "../interfaces/spiderman.ts";
// import md5 from "crypto-js/md5";

const ts = "1";
// const privateKey = "d8fa88cea2e8e6519ccae4b0c0e9139734f0cd22";
const publicKey = "8fd7add001a5dffd40b57ad236f3a7e5";
const hash = "998eb4ff80ced36977d1d8e987903ebd";

// const hash = md5(ts + privateKey + publicKey).toString();
// console.log(hash);


export const url: string = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=spider&limit=99&ts=${ts}&hash=${hash}&apikey=${publicKey}`;

interface ProductsState {
    products: Products[];
    favorites: number[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    favorites: [],
    loading: false,
    error: null,
};

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        try {
            const response = await axios.get(url);
            return response.data.data.results as Products[];
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                console.error("Error fetching characters: ", error.message);
                return error.response?.data.message || "Failed to fetch characters.";
            } else if (error instanceof Error) {
                console.error("Error fetching characters: ", error);
                return "An unexpected error occurred!";
            } else {
                console.error("Error fetching characters:", error);
                return "An exception occurred!";
            }
        }
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<number>) => {
            const productId = action.payload;
            if (state.favorites.includes(productId)) {
                state.favorites = state.favorites.filter((id) => id !== productId);
            } else {
                state.favorites.push(productId);
            }
        },
        deleteProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload.map((product: Products) => ({
                ...product,
                liked: false, // Добавляем поле для обработки лайков
            }));
            state.loading = false;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

// Экспорт действий и селекторов
export const {toggleFavorite, deleteProduct} = productsSlice.actions;
export const selectProducts = (state: RootState) => state.products.products;
export const selectFavorites = (state: RootState) => state.products.favorites;
export const selectLoading = (state: RootState) => state.products.loading;
export const selectError = (state: RootState) => state.products.error;

// Экспорт редюсера
export default productsSlice.reducer;
