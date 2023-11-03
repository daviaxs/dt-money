import { css, styled } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.25rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  margin-top: -5rem;

  @media screen and (max-width: 900px) {
    overflow-x: auto;

    & {
      scrollbar-width: thin;
      scrollbar-color: #9b9bb0 #30303a;
    }

    &::-webkit-scrollbar-track {
      border-radius: 20px;
      background-color: #30303a;
      border: 10px solid #30303a;
      margin-inline: 1rem;
    }

    &::-webkit-scrollbar {
      height: 16px;
      width: 16px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background-color: #87879a;
      border: 5px solid #30303a;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #9b9bb0;
    }
  }
`

interface SummaryCardProps {
  $variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  .total {
    color: white;
  }

  ${(props) =>
    props.$variant === 'green' &&
    css`
      background-color: ${props.theme['green-700']};
    `}

  @media screen and (max-width: 900px) {
    width: 17rem;
  }
`
