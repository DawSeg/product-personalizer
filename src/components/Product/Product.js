import styles from "./Product.module.scss";
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { useState } from "react";

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.sizes[0].additionalPrice);

  const prepareColorClassName = (color) => {
    return styles[
      "color" + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  const getPrice = () => {
    return props.basePrice + currentPrice;
  };

  const Cart = e => {
    e.preventDefault();
    console.log(' Cart:', '\n',
     props.title, '\n',
    'Price: ' + getPrice(), '\n',
    'Size: ' + currentSize, '\n',
    'Color: ' + currentColor
    );
}

  return (
    <article className={styles.product}>
      
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;
