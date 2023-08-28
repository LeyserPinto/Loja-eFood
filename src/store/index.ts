import { configureStore } from '@reduxjs/toolkit'
import restaurantSlice from './slices/restaurants'
import restaurantEndpoint from '../services/api'

export const store = configureStore({
  reducer: {
    [restaurantEndpoint.reducerPath]: restaurantEndpoint.reducer,
    restaurantReducer: restaurantSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restaurantEndpoint.middleware),
})

export type RootState = ReturnType<typeof store.getState>
