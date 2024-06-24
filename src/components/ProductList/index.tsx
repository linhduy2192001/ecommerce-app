import React from "react";
import { Product } from "../../types/Product";
import { Button, Table } from "antd";

interface ProductListProps {
  products: Product[];
  onDelete: (id: number) => void;
}

const ProductList = ({ products, onDelete }: ProductListProps) => {
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Image", dataIndex: "image", key: "image" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Category", dataIndex: "category", key: "category" },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: Product) => (
        <Button type="primary" onClick={() => onDelete(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  return <Table dataSource={products} columns={columns} rowKey="id" />;
};

export default ProductList;
