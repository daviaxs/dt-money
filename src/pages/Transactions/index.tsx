import { Header } from '../../shared/components/Header'
import { Summary } from '../../shared/components/Summary'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <table>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>- R$ 59,00</td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </table>
      </TransactionsContainer>
    </div>
  )
}
