import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ModalState {
  modalWalletConnect: boolean
}

const initialState: ModalState = {
  modalWalletConnect: false
}

export const modalSlice = createSlice({
  name: 'tmp',
  initialState,
  reducers: {
    setModalWalletConnect: (state, action: PayloadAction<boolean>) => {
        state.modalWalletConnect = action.payload
    },
  },
})

export const { setModalWalletConnect } = modalSlice.actions

export default modalSlice.reducer