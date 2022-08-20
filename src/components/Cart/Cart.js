import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, getCartData } from "../store/cart-http";
import { useEffect } from "react";

let initialEffect = true

const Cart = (props) => {
  const items = useSelector((state) => state.cart.cartItem);
  const totalItem = useSelector(state => state.cart.totalItem)
  const show = useSelector((state) => state.cart.showCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch])

  useEffect(() => {
    if (initialEffect) {
      initialEffect= false;
      return
    }

    dispatch(sendCartData({cartItem: items, totalItem: totalItem}));
  }, [items, totalItem, dispatch])



  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {show && (
        <ul>
          {items.map((item) => (
            <CartItem item={item} key={item.id}/>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Cart;
