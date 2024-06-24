export const productsKey = {
  all: ["products"],
  detail: (id: number) => [...productsKey.all, id],
  list: (filters: unknown) => [...productsKey.all, filters],
};
