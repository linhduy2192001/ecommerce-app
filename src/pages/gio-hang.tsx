import React, { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useProduct } from "../hooks/useProduct";
import { fetchCartItems, removeFromCart } from "../stores/cart";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import ProductCart from "../components/ProductCart";

const ViewCart = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const { items, loading, error } = useProduct();

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="container">
      <div className="row pt-7">
        <div className="col-12">
          {/* Heading */}
          <h3 className="mb-10 text-center">Shopping Cart</h3>
        </div>
      </div>
      {loading ? (
        <Spin indicator={<LoadingOutlined spin />} size="large" />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className="mb-6 list-group list-group-lg list-group-flush-x">
          {items.map((e) => (
            <ProductCart {...e} onRemove={handleRemove} key={e.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewCart;
