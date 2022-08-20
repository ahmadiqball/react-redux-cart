import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../store/cart-slice';
import { useDispatch } from 'react-redux';

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(cartActions.addtoCart({item: {id: id,title: title, price: price, quantity: 1}}))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
