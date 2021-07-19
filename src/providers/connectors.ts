import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { LedgerConnector } from '@web3-react/ledger-connector'
import { TrezorConnector } from '@web3-react/trezor-connector'
import { LatticeConnector } from '@web3-react/lattice-connector'
import { FrameConnector } from '@web3-react/frame-connector'
import { AuthereumConnector } from '@web3-react/authereum-connector'
import { FortmaticConnector } from '@web3-react/fortmatic-connector'
import { MagicConnector } from '@web3-react/magic-connector'
import { PortisConnector } from '@web3-react/portis-connector'
import { TorusConnector } from '@web3-react/torus-connector'

const POLLING_INTERVAL = 12000
const RPC_URLS: { [chainId: number]: string } = {
  1: process.env.NEXT_PUBLIC_RPC_URL_1 as string,
  4: process.env.NEXT_PUBLIC_RPC_URL_4 as string
}

export const metamask = new InjectedConnector({ supportedChainIds: [3] })

export const network = new NetworkConnector({
  urls: { 1: RPC_URLS[1], 4: RPC_URLS[4] },
  defaultChainId: 1
})

export const walletconnect = new WalletConnectConnector({
  infuraId: '27e484dcd9e3efcfd25a83a78777cdf1',
  supportedChainIds: [1, 4, 100]
})

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[1],
  appName: 'web3-react example'
})


export const fortmatic = new FortmaticConnector({ apiKey: process.env.NEXT_PUBLIC_FORTMATIC_API_KEY as string, chainId: 4 })

export const magic = new MagicConnector({
  apiKey: process.env.NEXT_PUBLIC_MAGIC_API_KEY as string,
  chainId: 4,
  email: 'magic@defi.org'
})

export const portis = new PortisConnector({ dAppId: process.env.NEXT_PUBLIC_PORTIS_DAPP_ID as string, networks: [1, 100] })
