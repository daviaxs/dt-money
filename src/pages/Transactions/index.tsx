import { useContextSelector } from 'use-context-selector'
import { Header } from '../../shared/components/Header'
import { Summary } from '../../shared/components/Summary'
import { TransactionsContext } from '../../shared/contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../shared/utils/fomatter'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { SearchForm } from './utils/SearchForm'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions && transactions.length > 0 ? (
              transactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHighLight $variant={transaction.type}>
                        {transaction.type === 'outcome' && '- '}
                        {priceFormatter.format(transaction.price)}
                      </PriceHighLight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td colSpan={4}>Nenhuma transação encontrada</td>
              </tr>
            )}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
