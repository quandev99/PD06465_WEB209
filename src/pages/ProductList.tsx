import React from "react";
import { Link } from "react-router-dom";
import {
  useGetProductsQuery,
  useRemoveProductMutation,
} from "../api/productApi";
import { IProduct } from "../types/Product";

const ProductList = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  const [removeProduct] = useRemoveProductMutation();
  const handleRemove = async (id: any) => {
    const confirm = window.confirm("Are you sure you want to remove");
    if (confirm) {
      await removeProduct(id);
      alert("Product removed");
    }
  };
  if (isLoading) return <div className="text-center text-3xl">Loading...</div>;
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="text-blue-500">Product List</div>
        <Link to="/add" className="text-white p-2 bg-green-500">
          Add Product
        </Link>
      </div>
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Name
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {products?.map((product: IProduct, index: number) => (
            <tr key={index}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                {index + 1}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                {product.name}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                {product.price}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                {product.quantity}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                {product.description}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                {product?.category}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                <button
                  onClick={() => handleRemove(product?.id)}
                  className="text-white p-2 bg-red-500"
                >
                  Delete
                </button>
                <Link
                  to={`/edit/${product.id}`}
                  className="text-white p-2 bg-green-500 inline-block"
                >
                  Edit Product
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
