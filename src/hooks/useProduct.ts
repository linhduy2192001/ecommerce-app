import { useSelector } from "react-redux";
import { RootState } from "../stores";

export const useProduct = () => {
  return useSelector((state: RootState) => state.cart);
};
