import { ArrowDownCircle, ArrowUpCircle, DollarSign } from 'lucide-react'
import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/fomatter'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowUpCircle size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowDownCircle size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard $variant="green">
        <header>
          <span className="total">Total</span>
          <DollarSign size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
      <div></div>
    </SummaryContainer>
  )
}
