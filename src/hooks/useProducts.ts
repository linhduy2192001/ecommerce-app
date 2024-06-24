import { useQuery } from "@tanstack/react-query";
import { productsKey } from "../constants/productsKey";
import { productService } from "../services/productService";

interface UseProductsProps {
  page?: number;
  limit?: number;
}

export const useProducts = ({ page = 1, limit = 10 }: UseProductsProps) => {
  return useQuery({
    queryKey: productsKey.list({ page, limit }),
    queryFn: () => productService.getProducts(page, limit),
  });
};
