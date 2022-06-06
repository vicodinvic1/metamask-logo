import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider, CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { RecoilRoot } from 'recoil'
import {
  QueryClient,
  QueryClientProvider
} from 'react-query'

import Application from 'containers/Application'

import { history, store, theme } from './bootstrap'

const cache = createCache({
  key: 'css',
  prepend: true
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000
    }
  }
})

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CacheProvider value={cache}>
            <RecoilRoot>
              <Application />
            </RecoilRoot>
          </CacheProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
