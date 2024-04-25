import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from "./types";

// call backend, retrieve data
export const api = createApi({ 
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }), // making a call using localhost
    reducerPath: "main", 
    tagTypes: ["Kpis", "Products", "Transactions"],
    endpoints: (build) => ({
            // response
        getKpis: build.query<Array<GetKpisResponse>, void> ({
            query: () => "kpi/kpis/", // make api call to this url
            providesTags: ["Kpis"]
        }), // copy and paste to make more api calls
        getProducts: build.query<Array<GetProductsResponse>, void> ({
            query: () => "product/products/", // make api call to this url
            providesTags: ["Products"]
        }), // copy and paste to make more api calls
        getTransactions: build.query<Array<GetTransactionsResponse>, void> ({
            query: () => "transaction/transactions/", // make api call to this url
            providesTags: ["Transactions"]
        }), // copy and paste to make more api calls
    })
})

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api; // grab hook