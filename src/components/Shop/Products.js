import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id="i1"
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        />
        <ProductItem
          id="i2"
          title="2nd Test"
          price={5}
          description="This is a second product - amazing!"
        />
      </ul>
    </section>
  );
};

export default Products;
