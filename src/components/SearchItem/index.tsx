import React from "react";
import { Product } from "../../types/Product";
import { currency } from "../../utils/currency";

const SearchItem = ({ title, image, price, category }: Product) => {
  return (
    <div className="mb-5 row align-items-center position-relative">
      <div className="col-4 col-md-3">
        {/* Image */}
        <img className="img-fluid" src={category.image} alt="..." />
      </div>
      <div className="col position-static">
        {/* Text */}
        <p className="mb-0 font-weight-bold">
          <a className="stretched-link text-body" href="./product.html">
            {title}
          </a>{" "}
          <br />
        </p>
        <div className="card-product-price">
          <span className="sale text-primary">{currency(price)}</span>
        </div>
        <p />
      </div>
    </div>
  );
};

export default SearchItem;
