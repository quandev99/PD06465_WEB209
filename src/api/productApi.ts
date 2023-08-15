import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../types/Product";

export const productApi = createApi({
  reducerPath: "products",
  tagTypes: ["Product"],
  baseQuery: fetchBaseQuery({ baseUrl: " http://localhost:3000" }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => `/products`,
      providesTags: ["Product"],
    }),
    getProductById: builder.query<IProduct, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    addProduct: builder.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: `/products`,
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),
    editProduct: builder.mutation<IProduct, string>({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: "PATCH",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),
    removeProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["Product"],
    }),
    searchProduct: builder.query<void, string>({
      query: (params) => ({
        url: `products?name_like=${encodeURIComponent(params)}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useEditProductMutation,
  useRemoveProductMutation,
  useSearchProductQuery,
} = productApi;

export const productReducer = productApi.reducer;
