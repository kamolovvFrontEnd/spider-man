import {useSelector} from "react-redux";
// import Card from "../../components/Card/Card";

const ProductsPage: React.FC = () => {
    const loading = useSelector((state: any) => state.products.loading);
    const error = useSelector((state: any) => state.products.error);

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
                {/*{products.map((product) => (*/}
                {/*    <Card*/}
                {/*        key={product.id}*/}
                {/*        product={product}*/}
                {/*        onDelete={() => dispatch(deleteProduct(product.id))}*/}
                {/*    />*/}
                {/*))}*/}
            </div>
        </div>
    );
};

export default ProductsPage;
