// libs
import React from "react";
// hooks
import { useStore } from "@/hooks/useStore";
// others
import "./style.scss";
import { message } from "antd";
import Result from "@/components/Result";
import { useRouter } from "@/hooks";
import CONSTANTS from "@/constants";
import { useDispatch } from "react-redux";
import { deleteCartActions } from "@/actions/Common/deleteCartActions";

/**
 * Checkout
 */
const Checkout = ({ setVisibleDrawerCart }) => {
  const {
    cartReducer: { priceCart }
  } = useStore("Common");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleDeleteCart = () => {
    dispatch(
      deleteCartActions({
        payload: {
          data: {}
        }
      })
    );
  };

  return (
    <>
      <div
        onClick={() => {
          if (priceCart > 0) {
            setVisibleDrawerCart(false);
            router.push(CONSTANTS.ROUTERS.HOME);
            message.success(<Result />, 1);
            handleDeleteCart();
          }
        }}
        className="checkout-wrapper"
      >
        <div className="txt">Checkout</div>
        <div className="all-price">{`$${priceCart}.00`}</div>
      </div>
    </>
  );
};

export default Checkout;
