import ReactDOM from 'react-dom'

import * as S from './Modal.styled'

interface ChildrenProps {
  children: React.ReactNode
}

const Modal = ({ children }: ChildrenProps) => {
  const element = typeof window !== 'undefined' && document.querySelector('#modal-root')
  return element && children ? ReactDOM.createPortal(children, element) : null
}

const Background = ({ children }: ChildrenProps) => {
  return <S.Background>{children}</S.Background>
}

const Layout = ({ children }: ChildrenProps) => {
  return <S.Layout>{children}</S.Layout>
}

interface CloseButtonProps {
  onClick: () => void
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return <i className='ri-close-line' onClick={onClick} />
}

Modal.Background = Background
Modal.Layout = Layout
Modal.CloseButton = CloseButton

export default Modal
