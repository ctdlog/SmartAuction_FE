import Header from '@/components/common/Header'

import * as S from './Layout.styled'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <S.Main>{children}</S.Main>
    </div>
  )
}

export default Layout
