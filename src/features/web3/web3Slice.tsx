import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Web3State {
  accounts: string[]
}

const initialState: Web3State = {
    accounts: []
}

export const web3Slice = createSlice({
  name: 'tmp',
  initialState,
  reducers: {
    setAccounts: (state, action: PayloadAction<string[]>) => {
      state.accounts = action.payload
    },
    clearAccounts: (state) => {
        state.accounts = []
    },
    addAccount: (state, action: PayloadAction<string>) => {
      state.accounts = [...state.accounts, action.payload]
    }
  }
})

export const { setAccounts, clearAccounts, addAccount } = web3Slice.actions

export default web3Slice.reducer