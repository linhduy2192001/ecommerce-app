import { useQuery } from "@tanstack/react-query";
import { productsKey } from "../constants/productsKey";
import { productService } from "../services/productService";

interface UseProductsProps {
  page?: number;
  limit?: number;
  sortOrder?: string;
}

export const useProducts = ({
  page = 1,
  limit = 10,
  sortOrder,
}: UseProductsProps) => {
  return useQuery({
    queryKey: productsKey.list({ page, limit }),
    queryFn: () => productService.getProducts(page, limit, sortOrder),
  });
};
