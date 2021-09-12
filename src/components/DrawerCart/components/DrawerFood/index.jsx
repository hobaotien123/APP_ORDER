// libs
import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
// hooks
import { useStore } from "@/hooks/useStore";
// others
import "./style.scss";
import { deleteItemCartActions } from "@/actions/Common/deleteItemCartActions";
import { updateCartActions } from "@/actions/Common/updateCartAction";
import { removeCartActions } from "@/actions/Common/removeCartAction";

/**
 * DrawerFood
 */
const DrawerFood = () => {
  const {
    cartReducer: { listCartFood }
  } = useStore("Common");

  const dispatch = useDispatch();

  const handleUpdateCart = food => {
    dispatch(
      updateCartActions({
        payload: {
          data: {
            ...food,
            countFood: food.countFood ? food.countFood + 1 : 0 + 1,
            priceFood: food.price
          }
        }
      })
    );
  };

  const handleRemoveCart = food => {
    dispatch(
      removeCartActions({
        payload: {
          data: {
            ...food,
            countFood: food.countFood - 1,
            priceFood: food.price
          }
        }
      })
    );
  };

  const handleDeleteItemCart = food => {
    dispatch(
      deleteItemCartActions({
        payload: {
          data: {
            ...food
          }
        }
      })
    );
  };

  return (
    <>
      {listCartFood.map(food => (
        <div key={food.id + food.idFood} className="drawer-food-wrapper">
          <div className="food">
            <div className="btn-cart">
              <div
                onClick={() => {
                  handleUpdateCart(food);
                }}
              >
                +
              </div>
              <div>{food.countFood}</div>
              <div onClick={() => handleRemoveCart(food)}>-</div>
            </div>
            <div className="img">
              <img src={food.image} alt="/img/snake1.jpg" />
            </div>
            <div className="info-food">
              <div className="name">{food.name}</div>
              <div className="price">{`$${food.price}`}</div>
              <div className="count">{`1 x ${food.countFood}`}</div>
            </div>
            <div className="all-price">{`$${food.countFood * food.price}`}</div>
            <div className="remove-food">
              <CloseOutlined
                onClick={() => {
                  handleDeleteItemCart(food);
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DrawerFood;
