'use client'

import { configureStore } from '@reduxjs/toolkit'
import tmpReducer from './features/tmp/tmpSlice'
import modalReducer from './features/modal/modalSlice'
import web3Slice from '@/features/web3/web3Slice'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    tmp: tmpReducer,
    web3: web3Slice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch