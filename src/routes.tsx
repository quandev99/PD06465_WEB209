import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import ProductList from "./pages/ProductList";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout></AdminLayout>,
    children: [
      { index: true, element: <ProductList></ProductList> },
      { path: "/add", element: <ProductAdd></ProductAdd> },
      { path: "/edit/:id", element: <ProductEdit></ProductEdit> },
    ],
  },
]);
