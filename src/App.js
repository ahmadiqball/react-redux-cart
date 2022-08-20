import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import React from "react";
import { useSelector } from "react-redux";
import Notification from "./components/UI/Notification";

function App() {
  const show = useSelector((state) => state.ui.showNotification);
  const notifProps = useSelector((state) => state.ui);

  return (
    <React.Fragment>
      {show && (
        <Notification
          status={notifProps.status}
          title={notifProps.title}
          message={notifProps.message}
        />
      )}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
