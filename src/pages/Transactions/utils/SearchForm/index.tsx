import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as z from 'zod'
import { TransactionsContext } from '../../../../shared/contexts/TransactionsContext'
import { useWindowWidth } from '../../../../shared/hooks/useWindowWidth'
import { SearchFormContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { width } = useWindowWidth()

  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransaction(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder={width <= 600 ? 'Pesquisar' : 'Busque por transações'}
        {...register('query')}
      />
      <button type="submit" name="pesquisar" disabled={isSubmitting}>
        <Search />
        {width > 600 && <span>Buscar</span>}
      </button>
    </SearchFormContainer>
  )
}
