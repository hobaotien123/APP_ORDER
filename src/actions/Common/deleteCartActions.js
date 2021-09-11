import { TYPE } from "@/actionTypes/Common";

export const deleteCartActions = ({ payload }) => ({
  type: TYPE.DELETE_CART,
  payload
});
