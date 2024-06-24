import { CART_API } from "../config/api";
import { Product } from "../types/Product";
import http from "../utils/http";

export const cartService = {
  getItems: () => {
    return http.get(CART_API);
  },
  addItem(product: Product) {
    return http.post(CART_API, product);
  },
  removeItem(productId: number) {
    return http.delete(`${CART_API}/${productId}`);
  },
};
