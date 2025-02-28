import Card from "../../components/Card/Card";
import {useEffect, useState} from "react";
import {Products, Response} from "../../interfaces/spiderman";
import {getData} from "../../api/api.ts";
import styles from "./ProductPage.module.css";
import "../../global.css";

const ProductsPage: React.FC = () => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState<Products[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response: Response = await getData(search);

                setLoading(false);
                setProducts(response.data.results);
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
    }, [search]);

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
