import styles from './ProductImage.modules.scss';

const ProductImage = props =>{
    return(
        <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`}
        />
      </div>
    );
};
