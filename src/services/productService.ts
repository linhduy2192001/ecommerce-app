import { PRODUCT_API } from "../config/api";
import { Product } from "../types/Product";
import http from "../utils/http";

export const productService = {
  getProducts(
    page?: number | string,
    limit?: number | string,
    sortOrder?: string
  ) {
    return http.get<Product[]>(PRODUCT_API, {
      params: {
        _page: page,
        _limit: limit,
        _sort:
          sortOrder === "price_asc"
            ? "price"
            : sortOrder === "price_desc"
            ? "price_desc"
            : undefined,
      },
    });
  },
  getProduct() {
    return http.get<Product[]>(PRODUCT_API);
  },
  addProducts(newProduct: Product) {
    return http.post(`${PRODUCT_API}`, newProduct);
  },
  removeProduct(id: number) {
    return http.delete(`${PRODUCT_API}/${id}`);
  },
};
