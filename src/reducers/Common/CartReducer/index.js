import { TYPE } from "@/actionTypes/Common";

const initialState = {
  listCartFood: [],
  countFood: 0,
  priceCart: 0
};

export function cartReducer(state = initialState, { type, payload }) {
  const { is403 } = state;
  if (is403) return initialState;

  switch (type) {
    case TYPE.UPDATE_CART: {
      const hasFood = state.listCartFood.find(
        item =>
          item.id === payload.data.id && item.idFood === payload.data.idFood
      );
      if (hasFood) {
        return {
          ...state,
          countFood: state.countFood + 1,
          priceCart: state.priceCart + payload.data.priceFood,
          listCartFood: state.listCartFood.map(item => {
            if (
              item.id === payload.data.id &&
              item.idFood === payload.data.idFood
            ) {
              return { ...item, countFood: payload.data.countFood };
            }
            return { ...item };
          })
        };
      }
      return {
        ...state,
        listCartFood: [...state.listCartFood, payload.data],
        priceCart: state.priceCart + payload.data.priceFood,
        countFood: state.countFood + 1
      };
    }
    case TYPE.REMOVE_CART: {
      const indexFood = state.listCartFood.findIndex(
        item =>
          item.id === payload.data.id && item.idFood === payload.data.idFood
      );
      if (payload.data.countFood > 0) {
        return {
          ...state,
          countFood: state.countFood - 1,
          priceCart: state.priceCart - payload.data.priceFood,
          listCartFood: state.listCartFood.map(item => {
            if (
              item.id === payload.data.id &&
              item.idFood === payload.data.idFood
            ) {
              return { ...item, countFood: payload.data.countFood };
            }
            return { ...item };
          })
        };
      }
      state.listCartFood.splice(indexFood, 1);
      return {
        ...state,
        countFood: state.countFood - 1,
        priceCart: state.priceCart - payload.data.priceFood,
        listCartFood: state.listCartFood
      };
    }
    case TYPE.DELETE_ITEM_CART: {
      const indexFood = state.listCartFood.findIndex(
        item =>
          item.id === payload.data.id && item.idFood === payload.data.idFood
      );
      if (indexFood > -1) {
        state.listCartFood.splice(indexFood, 1);
      }
      return {
        ...state,
        countFood: state.countFood - payload.data.countFood,
        priceCart:
          state.priceCart - payload.data.priceFood * payload.data.countFood,
        listCartFood: state.listCartFood
      };
    }
    case TYPE.DELETE_CART: {
      return {
        listCartFood: [],
        countFood: 0,
        priceCart: 0
      };
    }
    default: {
      return state;
    }
  }
}
