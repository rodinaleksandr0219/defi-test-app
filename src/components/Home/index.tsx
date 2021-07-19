import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import Header from '../Header'
import ProvidersDialog from '../ProvidersDialog'
import TransferForm from '../TransferForm'
import { ProviderType, connectorByProvider } from '../../providers'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import {
  providersDialogOpen,
  toggleProvidersDialog,
  connect,
  getConnecting,
  getProvider,
  connectComplete,
} from '../../redux/slices'

const Main = () => {
  const { connector, activate } = useWeb3React<Web3Provider>()
  const dispatch = useAppDispatch()
  const modalOpen = useAppSelector(providersDialogOpen)
  const connecting = useAppSelector(getConnecting)
  const currentProvider = useAppSelector(getProvider)

  useEffect(() => {
    if (currentProvider && connectorByProvider[currentProvider] === connector) {
      dispatch(connectComplete())
    }
  }, [currentProvider, connector])

  const handleClose = (providerName: ProviderType) => {
    dispatch(toggleProvidersDialog(false))
    if (providerName && !connecting) {
      dispatch(connect(providerName))
      activate(connectorByProvider[providerName])
    }
  }

  return (
    <>
      <Header />
      <ProvidersDialog open={modalOpen} onClose={handleClose} />
      <TransferForm />
    </>
  )
}

export default Main
