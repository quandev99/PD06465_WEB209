import React from "react";
import { useForm } from "react-hook-form";
import { IProduct } from "../types/Product";
import { useAddProductMutation } from "../api/productApi";
import { useNavigate } from "react-router-dom";

const categoryData = [
  { id: 1, value: "NXB 1" },
  { id: 2, value: "NXB 2" },
  { id: 3, value: "NXB 3" },
  { id: 4, value: "NXB 4" },
];
const ProductAdd = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IProduct>();
  const [addProduct] = useAddProductMutation();
  const onSubmit = async (data: IProduct) => {
    await addProduct(data);
    alert("Add to Success!");
    navigate("/");
  };
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
        <div>
          <label className="sr-only">Name</label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter Name"
              {...register("name", { required: "Name Address is required" })}
            />

            <div className="text-red-500">{errors?.name?.message}</div>
          </div>
        </div>
        <div>
          <label className="sr-only">price</label>

          <div className="relative">
            <input
              type="number"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter price"
              {...register("price", { required: "price Address is required" })}
            />

            <div className="text-red-500">{errors?.price?.message}</div>
          </div>
        </div>
        <div>
          <label className="sr-only">quantity</label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter quantity"
              {...register("quantity", {
                required: "quantity Address is required",
              })}
            />

            <div className="text-red-500">{errors?.quantity?.message}</div>
          </div>
        </div>
        <div>
          <label className="sr-only">description</label>

          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter description"
              {...register("description", {
                required: "description Address is required",
              })}
            />

            <div className="text-red-500">{errors?.description?.message}</div>
          </div>
        </div>
        <div>
          <select name="" id="">
            {categoryData?.map((item: any, index: number) => (
              <option value={item.value} key={index}>
                {item.value}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductAdd;
