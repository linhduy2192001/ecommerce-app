import AdminRouter from "../components/AdminRouter";
import PrivateRouter from "../components/PrivateRouter";
import { PATH } from "../config/path";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages";
import Profile from "../pages/ca-nhan";
import ViewCart from "../pages/gio-hang";
import AdminProductPage from "../pages/quan-ly-san-pham";
import ProductPage from "../pages/san-pham";
import Account from "../pages/tai-khoan";

export const routers = [
  {
    element: <MainLayout />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        element: <ProductPage />,
        path: PATH.Product,
      },
      {
        element: <Account />,
        path: PATH.Account,
      },
      {
        element: <ViewCart />,
        path: PATH.Cart,
      },

      {
        element: <PrivateRouter redirect={PATH.Account} />,
        children: [
          {
            element: <Profile />,
            path: PATH.Profile,
          },
        ],
      },
      {
        element: <AdminRouter redirect={PATH.Account} />,
        children: [
          {
            element: <AdminProductPage />,
            path: PATH.Admin,
          },
          {
            element: <Profile />,
            path: PATH.AccountAdmin,
          },
        ],
      },
    ],
  },
];
