import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { NewTransactionModal } from '../NewTransactionModal'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

export function Header() {
  const { width } = useWindowWidth()

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton name="Nova transação">
              {width <= 600 ? '+' : 'Nova transação'}
            </NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
