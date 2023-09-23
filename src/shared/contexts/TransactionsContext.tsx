import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

interface TransactionProps {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionProps {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: TransactionProps[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionProps) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    let transactions = localStorage.getItem('transactions')

    if (!transactions) {
      transactions = '[]'
    }

    let parsedTransactions = JSON.parse(transactions)

    if (query) {
      parsedTransactions = parsedTransactions.filter(
        (transaction: TransactionProps) =>
          transaction.description.toLowerCase().includes(query.toLowerCase()),
      )
    }

    setTransactions(parsedTransactions)
  }, [])

  const createTransaction = useCallback(
    async (data: CreateTransactionProps) => {
      const { category, description, price, type } = data

      const newTransaction = {
        id: Math.random(),
        category,
        description,
        price,
        type,
        createdAt: new Date().toISOString(),
      }

      const newTransactions = [newTransaction, ...transactions]
      localStorage.setItem('transactions', JSON.stringify(newTransactions))
      setTransactions(newTransactions)
    },
    [transactions],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
