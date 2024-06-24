import { useMemo } from "react";
import { Product } from "../types/Product";

export interface GroupedProducts {
  [categoryName: string]: Product[];
}

const useCategory = (products: Product[]): GroupedProducts => {
  const groupedProducts: GroupedProducts = useMemo(() => {
    return products?.reduce((acc: GroupedProducts, product: Product) => {
      const category = product.category.name;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {} as GroupedProducts);
  }, [products]);

  return groupedProducts;
};

export default useCategory;
