import {useEffect, useState} from "react";
import {getDataById} from "../../api/api.ts";
import {useParams} from "react-router-dom";
import {Products} from "../../interfaces/spiderman.ts";

const AboutProduct = () => {
    const {id} = useParams()
    const [product, setProduct] = useState<Products[]>([]);

    useEffect(() => {
        const getProductById = async () => {
            const response = await getDataById(id!)
            setProduct(response.data.results);
        }

        getProductById()
    }, [id]);

    return (
        <div>
            {product[0] ?
                <img src={`${product[0].thumbnail.path}.${product[0].thumbnail.extension}`} alt="Spider-man image"/> :
                <div className="loader"></div>}
        </div>
    );
};

export default AboutProduct;