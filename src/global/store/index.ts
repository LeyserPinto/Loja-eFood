import { configureStore } from '@reduxjs/toolkit'
import restaurantSlice from '../features/slices/restaurants'

export const store = configureStore({
  reducer: {
    restaurantReducer: restaurantSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
