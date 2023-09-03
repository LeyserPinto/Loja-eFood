import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Restaurant } from '../global/utils/Models/restaurants'
import { Prato } from '../global/utils/Models/prato';

const servicesEndpoint = createApi({
    reducerPath: 'servicesEndpoint',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://my-fake-api-v1.vercel.app/' }),
    endpoints: (builder) => ({
      getAllRestaurants: builder.query<Restaurant[], void>({
        query: () => `restaurantes`,
      }),
      getCardapioByRestaurante: builder.query<Prato[], string>({
        query: (restauranteid) => `cardapio?id=${restauranteid}`,
      }),
      getRestauranteById: builder.query<Restaurant[], string>({
        query: (restauranteid) => `restaurantes?id=${restauranteid}`,
      }),
    }),
})


export default servicesEndpoint;
export const { useGetAllRestaurantsQuery, useGetCardapioByRestauranteQuery, useGetRestauranteByIdQuery } = servicesEndpoint