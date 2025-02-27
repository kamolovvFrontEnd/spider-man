import Card from "../../components/Card/Card";
import getData from "../../api/api";
import {useEffect, useState} from "react";
import "../../global.css";
import {Products, Response} from "../../interfaces/spiderman";

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Products[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response: Response = await getData();

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
    }, []);

    const showProducts = () => {
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
            <h1 className="text-center">Spider universe</h1>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    gap: "2rem",
                }}
            >
                {loading ? loader() : showProducts()}
            </div>
        </div>
    );
};

export default ProductsPage;
