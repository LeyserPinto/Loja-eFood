import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Restaurant } from '../global/utils/Models/restaurants'

const restaurantEndpoint = createApi({
    reducerPath: 'restaurantEndpoint',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://my-fake-api-v1.vercel.app/' }),
    endpoints: (builder) => ({
      getAllRestaurants: builder.query<Restaurant[], void>({
        query: () => `restaurants`,
      }),
    }),
})


export default restaurantEndpoint;
export const { useGetAllRestaurantsQuery } = restaurantEndpoint