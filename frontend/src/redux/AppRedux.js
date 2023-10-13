import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { appStore } from './appStore'


import persistStore from 'redux-persist/es/persistStore'

const persistorStorageApp=persistStore(appStore)



export const AppRedux = ({children}) => {
  return (
    <Provider store={appStore}>
        <PersistGate persistor={persistorStorageApp}>
            {children}
        </PersistGate>
    </Provider>
  )
}
