import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TmpState {
  connected: boolean
  seasonCurrent: number
  seasonActive: number
  seasonAvailable: number
}

const initialState: TmpState = {
  connected: false,
  seasonCurrent: 2,
  seasonActive: 3,
  seasonAvailable: 2
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
    },
    setSeasonActive: (state, action: PayloadAction<number>) => {
      state.seasonActive = action.payload
    }
  }
})

export const { connect, disconnect, setSeasonActive } = tmpSlice.actions

export default tmpSlice.reducer