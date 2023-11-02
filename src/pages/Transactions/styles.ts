import { styled } from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 2rem auto 0;
  padding: 0 1.25rem;
`
export const TransactionsTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.75rem;

  .headerTitle {
    display: flex;
    justify-content: space-between;
    width: 100%;

    p {
      font-weight: bold;
    }

    span {
      opacity: 0.5;
    }
  }
`

export const TransactionsTable = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  .notTransactionsFound {
    display: flex;
    text-align: center;
    margin-top: 0.5rem;
  }

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme['gray-700']};
    white-space: nowrap;
    width: 100%;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`
interface PriceHighLightProps {
  $variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.$variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
