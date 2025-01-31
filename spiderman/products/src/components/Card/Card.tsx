import { Products } from "../../features/productsSlice.ts";
import styles from "./Card.module.css";

interface CardProps {
  product: Products;
  onLike: () => void;
  onDelete: () => void;
}

const Card: React.FC<CardProps> = ({ product, onLike, onDelete }) => {
  return (
    <div className={styles.card}>
      <div>
        <img
          src={`${product.thumbnail.path}.${product.thumbnail.extension}`}
          alt={product.description}
          className={styles.image}
        />
        <h3>{product.name}</h3>
      </div>
      <div>
        <p>{product.description.length > 1 ? product.description : "Just your friendly neighbor - Spidey"}</p>
      </div>
      <div style={{ display: "grid" }}>
        <a
          href={product.urls[product.urls.length - 1].url}
          className={styles.link}
        >
          Click to read COMICKS
        </a>
        <div>
          <button
            onClick={onLike}
            style={{ color: product.liked ? "red" : "black" }}
          >
            ❤️
          </button>
          <button onClick={onDelete}>🗑️</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
