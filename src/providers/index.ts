import { Web3Provider } from '@ethersproject/providers'
import { UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from '@web3-react/frame-connector'

import { metamask, network, walletconnect, walletlink, fortmatic, magic, portis } from './connectors'

export enum ProviderNames {
  MetaMask      = 'MetaMask',
  WalletConnect = 'WalletConnect',
  WalletLink    = 'WalletLink',
  Fortmatic     = 'Fortmatic',
  Portis        = 'Portis',
  Network       = 'Network',
  Magic         = 'Magic',
}

export type ProviderType = ProviderNames | null

export const connectorByProvider: { [providerName in ProviderNames]: any } = {
  [ProviderNames.MetaMask]: metamask,
  [ProviderNames.WalletConnect]: walletconnect,
  [ProviderNames.WalletLink]: walletlink,
  [ProviderNames.Fortmatic]: fortmatic,
  [ProviderNames.Portis]: portis,
  [ProviderNames.Network]: network,
  [ProviderNames.Magic]: magic,

}

export const getErrorMessage = (error: Error) => {
  if (error instanceof NoEthereumProviderError) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network."
  } else if (
    error instanceof UserRejectedRequestErrorInjected ||
    error instanceof UserRejectedRequestErrorWalletConnect ||
    error instanceof UserRejectedRequestErrorFrame
  ) {
    return 'Please authorize this website to access your Ethereum account.'
  } else {
    return 'An unknown error occurred. Check the console for more details.'
  }
}

export const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider)
  return library
}
