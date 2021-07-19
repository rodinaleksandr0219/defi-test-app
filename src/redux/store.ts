import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import appReducer from './slices'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    app: appReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
