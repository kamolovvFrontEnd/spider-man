// import Card from "../../components/Card/Card";

const ProductsPage: React.FC = () => {
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
                {/*    />*/}
                {/*))}*/}
            </div>
        </div>
    );
};

export default ProductsPage;
