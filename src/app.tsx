import '~/core/styles/index.css'
import '~/core/styles/global.css'

import { MetaProvider, Title } from '@solidjs/meta'
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'
import { Suspense } from 'solid-js'

import { Header } from '~/features/common/ui/components'
import DataProvider from '~/features/common/ui/context/data-context'
import ThemeProvider from '~/features/common/ui/context/theme-context'

const queryClient = new QueryClient()

export default function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <QueryClientProvider client={queryClient}>
          <Router
            root={props => (
              <MetaProvider>
                <Title>036solidstart</Title>
                <Suspense>
                  <main class='flex h-screen flex-col gap-8'>
                    <Header />
                    {props.children}
                  </main>
                </Suspense>
              </MetaProvider>
            )}
          >
            <FileRoutes />
          </Router>
        </QueryClientProvider>
      </DataProvider>
    </ThemeProvider>
  )
}
