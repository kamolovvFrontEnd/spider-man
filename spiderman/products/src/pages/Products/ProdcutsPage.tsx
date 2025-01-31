import {useEffect} from "react";
import {useSelector} from "react-redux";
import {
    fetchProducts,
    selectProducts,
    toggleFavorite,
    deleteProduct,
} from "../../features/productsSlice";
import Card from "../../components/Card/Card";
import {useProductDispatch} from "../../hook/myDispatch.ts";

const ProductsPage: React.FC = () => {
    const dispatch = useProductDispatch();
    const products = useSelector(selectProducts);
    const loading = useSelector((state: any) => state.products.loading);
    const error = useSelector((state: any) => state.products.error);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <div className="loader"></div>;
    if (error) return <p>Error...</p>;

    return (
        <div>
            <div>
                <h1>Spider universe</h1>
            </div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    gap: "2rem",
                }}
            >
                {products.map((product) => (
                    <Card
                        key={product.id}
                        product={product}
                        onLike={() => dispatch(toggleFavorite(product.id))}
                        onDelete={() => dispatch(deleteProduct(product.id))}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
