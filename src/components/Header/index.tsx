import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}
// Aqui o elemento filho header está alterando um estado no componente pai.
//ele recebe uma função como props, e ela é acessada no onClick do butão.
export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
      <Container>
          <Content>
            <img src={logoImg} alt="dt money" />
            <button onClick={onOpenNewTransactionModal} type="button">
                Nova Transação
            </button>

            
          </Content>
      </Container>
    )
  }
  