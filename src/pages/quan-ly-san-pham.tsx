import { Divider, Button, message } from "antd";
import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import axios from "axios";
import { Product } from "../types/Product";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useNavigate } from "react-router-dom";
import { PATH } from "../config/path";
import { authActions } from "../stores/auth";
import { productService } from "../services/productService";

const AdminProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await productService.getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddProduct = async (newProduct: Product) => {
    try {
      const response = await productService.addProducts(newProduct);
      setProducts([...products, response.data]); // Update local state
      message.success("Thêm sản phẩm thành công ");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleDeleteProduct = async (id: number) => {
    try {
      await productService.removeProduct(id);
      setProducts(products.filter((product) => product.id !== id)); // Update local state
      message.success("Xoá sản phẩm thành công");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleLogOut = () => {
    dispatch(authActions.logout());
    message.success("Bạn đã đăng xuất thành công");
    navigate(PATH.Account);
  };
  return (
    <div className="container admin-product-page">
      <Button
        type="primary"
        className="float-right mt-5"
        danger
        onClick={handleLogOut}
      >
        Log out
      </Button>
      <Divider className="mt-10 text-center">Add New Product</Divider>
      <ProductForm onCreate={handleAddProduct} />
      <Divider>Product List</Divider>
      <ProductList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default AdminProductPage;
