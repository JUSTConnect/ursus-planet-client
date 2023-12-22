import { createSlice } from '@reduxjs/toolkit'

export interface TmpState {
  connected: boolean
}

const initialState: TmpState = {
  connected: false
}

export const tmpSlice = createSlice({
  name: 'tmp',
  initialState,
  reducers: {
    connect: (state) => {
        state.connected = true
    },
    disconnect: (state) => {
        state.connected = false
    }
  },
})

export const { connect, disconnect } = tmpSlice.actions

export default tmpSlice.reducer