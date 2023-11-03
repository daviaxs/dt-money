import { useEffect, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { CalendarIcon } from '../../shared/assets/CalendarIcon'
import { CategoryIcon } from '../../shared/assets/CategoryIcon'
import { Header } from '../../shared/components/Header'
import { Summary } from '../../shared/components/Summary'
import { TransactionsContext } from '../../shared/contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../shared/utils/fomatter'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
  TransactionsTableContainer,
} from './styles'
import { SearchForm } from './utils/SearchForm'

export function Transactions() {
  const [width, setWidth] = useState(window.innerWidth)

  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
  }, [])

  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTableContainer>
          <div className="headerTitle">
            <p>Transações</p>
            <span>{transactions.length} items</span>
          </div>

          <TransactionsTable>
            {transactions && transactions.length > 0 ? (
              transactions.map((transaction) => {
                return (
                  <li key={transaction.id}>
                    <div className="description">{transaction.description}</div>
                    <div className="price">
                      <PriceHighLight $variant={transaction.type}>
                        {transaction.type === 'outcome' && (
                          <span className="minus">- </span>
                        )}
                        {priceFormatter.format(transaction.price)}
                      </PriceHighLight>
                    </div>
                    <div className="categoryAndDate">
                      <div className="category">
                        {width <= 600 && <CategoryIcon />}
                        {transaction.category}
                      </div>
                      <div className="date">
                        {width <= 600 && <CalendarIcon />}
                        {dateFormatter.format(new Date(transaction.createdAt))}
                      </div>
                    </div>
                  </li>
                )
              })
            ) : (
              <ul className="notTransactionsFound">
                <li>Nenhuma transação encontrada</li>
              </ul>
            )}
          </TransactionsTable>
        </TransactionsTableContainer>
      </TransactionsContainer>
    </>
  )
}
