// libs
import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
// hooks
import { useStore } from "@/hooks/useStore";
// components
import ButtonAddCart from "../ButtonAddCart";
// others
import "./style.scss";
import { useDispatch } from "react-redux";
import { updateCartActions } from "@/actions/Common/updateCartAction";
import { removeCartActions } from "@/actions/Common/removeCartAction";

/**
 * ButtonCard
 * @param {Object} food
 */
const ButtonCard = ({ food }) => {
  const {
    cartReducer: { listCartFood }
  } = useStore("Common");

  const foodReducer =
    listCartFood.find(
      item => item.id === food.id && item.idFood === food.idFood
    ) || {};
  const dispatch = useDispatch();

  const handleUpdateCart = () => {
    dispatch(
      updateCartActions({
        payload: {
          data: {
            ...food,
            countFood: foodReducer.countFood
              ? foodReducer.countFood + 1
              : 0 + 1,
            priceFood: food.price
          }
        }
      })
    );
  };

  const handleRemoveCart = () => {
    dispatch(
      removeCartActions({
        payload: {
          data: {
            ...food,
            countFood: foodReducer.countFood - 1 || 0,
            priceFood: food.price
          }
        }
      })
    );
  };

  return (
    <>
      {!foodReducer.countFood ? (
        <div
          className="button-cart-wrapper"
          onClick={() => {
            handleUpdateCart();
          }}
        >
          <ShoppingCartOutlined className="icon-cart" />
          <div className="txt">Card</div>
        </div>
      ) : (
        <ButtonAddCart
          countFood={foodReducer.countFood || 0}
          handleUpdateCart={handleUpdateCart}
          handleRemoveCart={handleRemoveCart}
        />
      )}
    </>
  );
};

export default ButtonCard;
