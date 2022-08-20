import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const totalItem = useSelector(state => state.cart.totalItem)

  const openCart = () => {
    dispatch(cartActions.cartToggle())
  }

  return (
    <button className={classes.button} onClick={openCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItem}</span>
    </button>
  );
};

export default CartButton;
