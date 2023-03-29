import Subtitle from '@/components/common/Subtitle'
import Title from '@/components/common/Title'
import * as S from '@/components/views/SignIn/GenerateMnemonic/GenerateMnemonic.styled'

import useMnemonic from './GenerateMnemonic.hooks'

interface Props {
  setSignInStateToVerify: () => void
}

const WalletRegister = ({ setSignInStateToVerify }: Props) => {
  const { mnemonic } = useMnemonic()

  const handleClick = () => {
    setSignInStateToVerify()
  }

  return (
    <S.Container>
      <Title size='4'>Mnemonic 문구가 생성되었습니다.</Title>
      <Subtitle size='4'>아래 문구를 메모장에 저장해주세요.</Subtitle>
      <span>{mnemonic}</span>
      <span>문구를 저장하셨나요?</span>
      <S.Button onClick={handleClick}>지갑 등록하러 가기</S.Button>
    </S.Container>
  )
}

export default WalletRegister
