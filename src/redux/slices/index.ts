import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BigNumber } from 'ethers'

import { RootState } from '../store'
import { ProviderNames } from '../../providers'

export type ProviderType = ProviderNames | null

interface AppState {
  providersDialogOpen: boolean,
  provider: ProviderType,
  connecting: boolean,
  balance: BalanceType
}

export interface BalanceType {
  eth?: BigNumber,
  dai?: BigNumber
}

const initialState = {
  providersDialogOpen: false,
  provider: null,
  connecting: false,
  balance: {
    eth: BigNumber.from(0),
    dai: BigNumber.from(0)
  } as BalanceType
} as AppState;

export const providersSlice = createSlice({
  name: 'defi-app',
  initialState,
  reducers: {
    toggleProvidersDialog: (state, action: PayloadAction<boolean>) => {
      state.providersDialogOpen = action.payload
    },
    connect: (state, action: PayloadAction<ProviderType>) => {
      state.provider = action.payload
      state.connecting = true
    },
    connectComplete: (state) => {
      state.connecting = false
    },
    disconnect: (state) => {
      state.provider = null
      state.connecting = false
    },
    updateBalance: (state, action: PayloadAction<BalanceType>) => {
      state.balance = {...state.balance, ...action.payload}
    }
  },
});

export const {
  toggleProvidersDialog,
  connect,
  connectComplete,
  disconnect,
  updateBalance
} = providersSlice.actions

export const providersDialogOpen = (state: RootState) => state.app.providersDialogOpen
export const getProvider = (state: RootState) => state.app.provider
export const getConnecting = (state: RootState) => state.app.connecting
export const getBalance = (state: RootState): BalanceType => state.app.balance

export default providersSlice.reducer;
