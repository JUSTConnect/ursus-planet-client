import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface IAccount
{
  address: string,
  chainId: string
}


export interface Web3State {
  accounts: IAccount[]
}

const initialState: Web3State = {
    accounts: []
}

export const web3Slice = createSlice({
  name: 'tmp',
  initialState,
  reducers: {
    setAccounts: (state, action: PayloadAction<IAccount[]>) => {
      state.accounts = action.payload
    },
    clearAccounts: (state) => {
      state.accounts = []
    },
    addAccount: (state, action: PayloadAction<IAccount>) => {
      console.log(action.payload, 'PAYLOAD')
      if (!action.payload.address) return
      if (state.accounts.find((i: IAccount) => i.address == action.payload.address)) return
      state.accounts = [...state.accounts, action.payload]
    }
  }
})

export const { setAccounts, clearAccounts, addAccount } = web3Slice.actions

export default web3Slice.reducer