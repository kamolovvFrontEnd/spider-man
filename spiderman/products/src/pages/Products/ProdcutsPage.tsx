import Card from "../../components/Card/Card";
import {useCallback, useEffect, useState} from "react";
import {Products} from "../../interfaces/spiderman";
import {getData} from "../../api/api.ts";
import debounce from "debounce"
import styles from "./ProductPage.module.css";
import "../../global.css";

const ProductsPage: React.FC = () => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState<Products[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState<boolean>(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceFetch = useCallback(
        debounce(async (query?: string) => {
            if (query) {
                const data = await getData(query);
                setProducts(data.data.results)
            } else {
                const data = await getData();
                setProducts(data.data.results)
            }
        }, 500), [search]
    );

    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoading(false);
                await debounceFetch(search)
            } catch (error) {
                setLoading(false);
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("Something went wrong!");
                }
            }
        };

        getProducts();
    }, [debounceFetch, search]);

    const showProductsOrError = () => {
        return error ? (
            <div className="error"><p>{error}</p></div>
        ) : (
            products.map((product: Products) => <Card key={product.id} product={product}/>)
        );
    };

    const loader = () => {
        return <div className="loader"></div>;
    };

    return (
        <div>
            <div className="flex justify-around p-5">
                <h1>Spider universe</h1>
                <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}
                       className={styles.search}/>
            </div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    gap: "2rem",
                }}
            >
                {loading ? loader() : showProductsOrError()}
            </div>
        </div>
    );
};

export default ProductsPage;
