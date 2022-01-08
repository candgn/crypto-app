import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "ecca664c82mshdc01dfda8e381edp12c9c1jsnf0dad8674ca7",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
    query:(coinId)=> createRequest(`/coin/${coinId}`)
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery  } = cryptoApi;

// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       symbols: 'BTC',
//       uuids: 'Qwsogvtv82FCd',
//       tiers: '1',
//       tags: 'defi',
//       orderBy: 'marketCap',
//       search: 'Bitco',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': 'ecca664c82mshdc01dfda8e381edp12c9c1jsnf0dad8674ca7'
//     }
//   };
