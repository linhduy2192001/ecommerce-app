import { RootState } from "./../stores/index";
import { useSelector } from "react-redux";

export const useAuth = () => {
  return useSelector((state: RootState) => state.auth);
};
