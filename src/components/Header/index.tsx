import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PATH } from "../../config/path";
import { useProduct } from "../../hooks/useProduct";
import { useAuth } from "../../hooks/useAuth";
import SearchDrawer from "../SearchDrawer";

const Header = () => {
  const [openSearchDrawer, setOpenSearchDrawer] = useState(false);
  const { user } = useAuth();
  const { items } = useProduct();

  const location = useLocation();
  const isAdminPath = location.pathname === PATH.Admin;
  return (
    <>
      <SearchDrawer
        onClose={() => setOpenSearchDrawer(false)}
        open={openSearchDrawer}
      />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Brand */}
          <Link className="navbar-brand" to={PATH.Home}>
            <img style={{ width: "40px" }} src="./img/shopee-icon.png" />
            Shopper.
          </Link>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapse */}
          <div className="navbar-collapse" id="navbarCollapse">
            {/* Nav */}
            {isAdminPath ? (
              <h3 className="mx-auto navbar-nav">Admin</h3>
            ) : (
              <ul className="mx-auto navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to={PATH.Home}>
                    Trang chủ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={PATH.Product}>
                    Sản phẩm
                  </Link>
                </li>
              </ul>
            )}

            {/* Nav */}
            <ul className="flex-row navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="modal"
                  href="#modalSearch"
                  onClick={(ev) => {
                    ev.preventDefault;
                    setOpenSearchDrawer(true);
                  }}
                >
                  <i className="fe fe-search" />
                </a>
              </li>
              <li className="nav-item ml-lg-n4">
                <a className="nav-link" href="./account-wishlist.html">
                  <i className="fe fe-heart" />
                </a>
              </li>
              <li className="nav-item ml-lg-n4">
                <Link className="nav-link" data-toggle="modal" to={PATH.Cart}>
                  <span data-cart-items={items.length}>
                    <i className="fe fe-shopping-cart" />
                  </span>
                </Link>
              </li>
              <li className="nav-item ml-lg-n4">
                <Link
                  className="nav-link"
                  to={user ? PATH.Profile : PATH.Account}
                >
                  <i className="fe fe-user" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
