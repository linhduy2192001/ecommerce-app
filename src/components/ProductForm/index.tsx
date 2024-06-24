import { Button, Form, Input, InputNumber } from "antd";
import React from "react";
import { Product } from "../../types/Product";

interface ProductFormProps {
  onCreate: (product: Product) => void;
}

const ProductForm = ({ onCreate }: ProductFormProps) => {
  const [form] = Form.useForm();
  const generateRandomId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onCreate({
        ...values,
        id: Date.now(),
        category: {
          id: generateRandomId(),
          name: values.categoryName,
          image: values.categoryImage,
        },
      });
      form.resetFields();
    });
  };

  return (
    <>
      <Form layout="vertical" form={form}>
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="price" label="Price" rules={[{ required: true }]}>
          <InputNumber min={0} step={0.01} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="categoryName"
          label="Category Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="categoryImage"
          label="Image URL"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ProductForm;
