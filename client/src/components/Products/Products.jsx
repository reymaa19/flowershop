import "../Products/Products.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function Products({ addFlower, flowerBasket }) {
    const handleClick = () => {
        addFlower("tes");
    };

    //const [flowers, setFlowers] = useState([]);
    //
    //useEffect(() => {
    //    const test = async () => {
    //        const response = await axios.get("http://localhost:8090/flowers");
    //        setFlowers(response.data);
    //    };
    //    test();
    //}, []);

    return (
        <div className="product__container">
            {flowerBasket.map((flower) => {
                return (
                    <div className="product__card">
                        <img src={flower.img} alt="Product 1" className="product__image" />
                        <h2>{flower.name}</h2>
                        <h3 className="product__price">$5.99</h3>
                        {flower.meaning.map((a) => (
                            <p>{a + " "}</p>
                        ))}
                        <button className="product__button--add-to-cart" onClick={handleClick}>
                            Add to Cart
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default Products;

//<div className="product__card">
//    <img src="https://via.placeholder.com/150" alt="Product 1" className="product__card--image" />
//    <h3 className="product__price">$29.99</h3>
//    <button className="product__button--add-to-cart">Add to Cart</button>
//</div>
//<div className="product__card">
//    <img src="https://via.placeholder.com/150" alt="Product 2" className="product__card--image" />
//    <h3 className="product__price">$39.99</h3>
//    <button className="product__button--add-to-cart">Add to Cart</button>
//</div>
//<div className="product__card">
//    <img src="https://via.placeholder.com/150" alt="Product 3" className="product__card--image" />
//    <h3 className="product__price">$49.99</h3>
//    <button className="product__button--add-to-cart">Add to Cart</button>
//</div>
//<div className="product__card">
//    <img src="https://via.placeholder.com/150" alt="Product 4" className="product__card--image" />
//    <h3 className="product__price">$59.99</h3>
//    <button className="product__button--add-to-cart" onClick={handleClick}>
//        Add to Cart
//    </button>
//</div>
