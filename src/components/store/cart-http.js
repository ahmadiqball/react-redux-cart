import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

let firstInit = true;

export const sendCartData = (cart) => {
  return async (dispatch) => {
    if (firstInit) {
      firstInit = false;
      return;
    }
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending your cart data.",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-cart-2cf7d-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong in PUT data!");
      }
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Your cart successfully sent.",
        })
      );
    };

    sendRequest().catch(() => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Your cart failed to sent!",
        })
      );
    });
  };
};

export const getCartData = () => {
  return async (dispatch) => {
    const getCart = async () => {
      const response = await fetch(
        "https://redux-cart-2cf7d-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error("Something when wrong in GET data.");
      }

      return responseData;
    };

    try {
      const data = await getCart();
      dispatch(cartActions.initiateCart(data));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Your cart failed to get!",
        })
      );
    }
  };
};
