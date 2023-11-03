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
  margin-top: 1rem;

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

export const TransactionsTable = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  li {
    background-color: #29292e;
    display: flex;
    padding: 1rem;
    white-space: nowrap;
    overflow: hidden;
    gap: 2rem;

    .description {
      flex: 1;
      min-width: 7rem;
    }

    .price {
      flex: 1;
      max-width: 5rem;
      min-width: 5rem;
      position: relative;

      .minus {
        position: absolute;
        left: -0.5rem;
      }
    }

    .categoryAndDate {
      display: flex;
      justify-content: space-around;
      flex: 1;
      opacity: 50%;

      .category {
        flex: 1;
        display: flex;
        align-items: center;

        gap: 0.5rem;
        max-width: 5rem;
        min-width: 5rem;
      }

      .date {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }

    @media screen and (max-width: 600px) {
      flex-direction: column;
      padding: 1.25rem;
      gap: 1rem;

      .price {
        font-weight: bold;
        font-size: 20px;
      }

      .categoryAndDate {
        justify-content: space-between;
      }
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
