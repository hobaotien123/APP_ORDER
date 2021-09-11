// libs
import { useSelector } from "react-redux";

/**
 * useStore - Type and Extract page-reducer by pageName
 */
export const useStore = page => useSelector(state => state[page]);
