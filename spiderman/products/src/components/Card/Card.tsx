import {Products} from "../../interfaces/spiderman.ts";
import styles from "./Card.module.css";
import {Link} from "react-router-dom";

interface CardProps {
    product: Products;
}

const Card: React.FC<CardProps> = ({product}) => {
    return (
        <div className={styles.card}>
            <Link to={`/${product.id}`} className={styles.about}>
                <div>
                    <img
                        src={`${product.thumbnail.path}.${product.thumbnail.extension}`}
                        alt={product.description}
                        className={styles.image}
                    />
                    <h3>{product.name}</h3>
                </div>
                <div>
                    <p>
                        {product.description.length > 1
                            ? product.description
                            : "Nothing here"}
                    </p>
                </div>
            </Link>
            <div style={{display: "grid"}}>
                <a
                    href={product.urls[product.urls.length - 1].url}
                    className={styles.link}
                >
                    Click to read COMICS
                </a>
            </div>
        </div>
    );
};

export default Card;
