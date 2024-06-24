import React, { useEffect } from "react";
import { Product } from "../../types/Product";
import { currency } from "../../utils/currency";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useProduct } from "../../hooks/useProduct";
import { fetchCartItems } from "../../stores/cart";

interface ProductCart extends Product {
  onRemove: (id: number) => void;
}

const ProductCart = ({
  id,
  title,
  price,
  category,
  image,
  onRemove,
}: ProductCart) => {
  return (
    <li className="list-group-item product-view-cart">
      <div className="row align-items-center">
        <div className="flex items-center gap-2 col-4 d-flex">
          <div className="custom-control custom-checkbox">
            <input
              className="custom-control-input"
              id="loginRemember"
              type="checkbox"
            />
            <label className="custom-control-label" htmlFor="loginRemember" />
          </div>
          {/* Image */}
          <a href="product.html">
            <img src={category.image} alt="..." className="img-fluid" />
          </a>
        </div>
        <div className="col">
          {/* Title */}
          <div className="mb-2 d-flex font-weight-bold">
            <a className="text-body" href="product.html">
              {title}
            </a>
          </div>
          {/* Text */}

          <div className="d-flex align-items-center">
            {/* Select */}
            {/* Remove */}
            <a
              className="ml-auto text-gray-400 font-size-xs"
              href="#!"
              onClick={() => onRemove(id)}
            >
              <i className="fe fe-x" /> Xóa
            </a>
          </div>
          {/*Footer */}
          <div className="d-flex align-items-center">
            {/* Select */}
            <div className="mb-2 d-flex align-items-center font-weight-bold">
              <span className="mr-2">{currency(price)}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductCart;
