import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_BASEURL,
});

export const api = createApi({
  reducerPath: 'goodBoyApi',
  baseQuery,
  endpoints: () => ({}),
});
