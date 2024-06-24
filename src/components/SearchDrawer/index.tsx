import { Drawer } from "antd";
import React, { useEffect, useState } from "react";
import SearchItem from "../SearchItem";
import { Product } from "../../types/Product";
import { productService } from "../../services/productService";

const SearchDrawer = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const handleSearchSubmit = () => {
    filterProducts(searchTerm);
    setShowResults(true);
  };

  const filterProducts = async (term: string) => {
    try {
      const res = await productService.getProducts(1, 100);
      const results = res.data.filter((e) =>
        e.title.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results.slice(0, 5));
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <Drawer
      onClose={onClose}
      open={open}
      headerStyle={{ display: "none" }}
      bodyStyle={{ padding: 0 }}
    >
      <div className="modal-content">
        {/* Close */}
        <button
          type="button"
          className="close !outline-none"
          data-dismiss="modal"
          aria-label="Close"
          onClick={onClose}
        >
          <i className="fe fe-x" aria-hidden="true" />
        </button>
        {/* Header*/}
        <div className="modal-header line-height-fixed font-size-lg">
          <strong className="mx-auto">Search Products</strong>
        </div>
        {/* Body: Form */}
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label className="sr-only" htmlFor="modalSearchCategories">
                Categories:
              </label>
              <select className="custom-select" id="modalSearchCategories">
                <option selected>All Categories</option>
                <option>Women</option>
                <option>Men</option>
                <option>Kids</option>
              </select>
            </div>
            <div className="input-group input-group-merge">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearch}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-border"
                  type="submit"
                  onClick={handleSearchSubmit}
                >
                  <i className="fe fe-search" />
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* Body: Results (add `.d-none` to disable it) */}
        <div className="modal-body border-top font-size-sm">
          {/* Heading */}
          <p>Search Results:</p>
          {/* Items */}
          {searchResults.map((e) => (
            <SearchItem key={e.id} {...e} />
          ))}
          {/* Button */}
          <a className="px-0 btn btn-link text-reset" href="./shop.html">
            View All <i className="ml-2 fe fe-arrow-right" />
          </a>
        </div>
        {/* Body: Empty (remove `.d-none` to disable it) */}
        <div className="border d-none modal-body">
          {/* Text */}
          <p className="mb-3 text-center font-size-sm">
            Nothing matches your search
          </p>
          <p className="mb-0 text-center font-size-sm">😞</p>
        </div>
      </div>
    </Drawer>
  );
};

export default SearchDrawer;
