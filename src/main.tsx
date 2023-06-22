import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/scss/global.scss'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </BrowserRouter>
)
