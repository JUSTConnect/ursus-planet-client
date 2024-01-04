'use client'

import { configureStore } from '@reduxjs/toolkit'
import tmpReducer from './features/tmp/tmpSlice'
import modalReducer from './features/modal/modalSlice'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    tmp: tmpReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch