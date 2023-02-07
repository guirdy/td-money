import { ThemeProvider } from 'styled-components'
import { Transactions } from './pages/Transactions'
import { TransactionsProvider } from './contexts/TransactionContext'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
