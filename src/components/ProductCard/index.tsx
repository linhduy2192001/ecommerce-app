import { Popconfirm, message } from "antd";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAuth } from "../../hooks/useAuth";
import { addToCart } from "../../stores/cart";
import { Product } from "../../types/Product";
import { currency } from "../../utils/currency";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../config/path";
import Skeleton from "../Skeleton";

const ProductCard = ({ id, title, image, price, category }: Product) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user } = useAuth();

  const handleAddCart = () => {
    dispatch(addToCart({ id, title, image, price, category }));
    message.success("Sản phẩm đã được thêm vào giỏ hàng");
  };

  return (
    <div className="col-6 col-md-4">
      {/* Card */}
      <div className="product-card card mb-7">
        {/* Badge */}

        {/* Image */}
        <div className="card-img">
          {/* Image */}
          <a className="card-img-hover" href="product.html">
            <img
              className="card-img-top card-img-back"
              src={category.image}
              alt="..."
            />
            <img
              className="card-img-top card-img-front"
              src={category.image}
              alt="..."
            />
          </a>
          {/* Actions */}
          <div className="card-actions">
            <span className="card-action"></span>
            <span className="card-action">
              <Popconfirm
                disabled={!!user}
                title="Vui lòng đăng nhập để thêm vào giỏ hàng"
                okText="Đồng ý"
                cancelText="Huỷ"
                onConfirm={() => navigate(PATH.Account)}
              >
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                  onClick={user ? handleAddCart : undefined}
                >
                  <i className="fe fe-shopping-cart" />
                </button>
              </Popconfirm>
            </span>
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="button"
              >
                <i className="fe fe-heart" />
              </button>
            </span>
          </div>
        </div>
        {/* Body */}
        <div className="px-0 card-body">
          {/* Category */}
          <div className="card-product-category font-size-xs">
            <a className="text-muted" href="shop.html">
              {category.name}
            </a>
          </div>
          {/* Title */}
          <div className="card-product-title font-weight-bold">
            <a className="text-body card-product-name" href="#">
              {title}
            </a>
          </div>
          {/* Price */}
          <div className="font-weight-bold text-muted">{currency(price)}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

export function ProductCardLoading() {
  return (
    <div className="col-6 col-md-4">
      {/* Card */}
      <div className="product-card card mb-7">
        {/* Badge */}

        {/* Image */}
        <div className="card-img">
          {/* Image */}
          <a className="card-img-hover" href="product.html">
            <Skeleton height={300} />
          </a>
          {/* Actions */}
          <div className="card-actions">
            <span className="card-action"></span>
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="button"
              >
                <i className="fe fe-shopping-cart" />
              </button>
            </span>
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="button"
              >
                <i className="fe fe-heart" />
              </button>
            </span>
          </div>
        </div>
        {/* Body */}
        <div className="px-0 card-body">
          {/* Category */}
          <div className="card-product-category font-size-xs">
            <a className="text-muted" href="shop.html">
              <Skeleton width={150} height="100%" />
            </a>
          </div>
          {/* Title */}
          <div className="card-product-title font-weight-bold">
            <a className="text-body card-product-name" href="#">
              <Skeleton width={150} height="100%" />
            </a>
          </div>
          {/* Price */}
          <div className="font-weight-bold text-muted">
            {" "}
            <Skeleton width={150} height="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}
