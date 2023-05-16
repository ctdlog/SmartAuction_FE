import Subtitle from '@/components/common/Subtitle'
import Title from '@/components/common/Title'
import * as S from '@/components/views/SignIn/GenerateMnemonic/GenerateMnemonic.styled'

import useMnemonic from './GenerateMnemonic.hooks'
import { downloadMnemonicCSV } from './GenerateMnemonic.utils'

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
      <S.Block>
        <Title size='4'>Mnemonic 문구가 생성되었습니다.</Title>
        <Subtitle size='4'>아래 문구를 복사하여 저장하시거나, CSV로 저장해주세요.</Subtitle>
        <S.Wrapper>
          <span>{mnemonic}</span>
        </S.Wrapper>
        <S.ButtonWrapper>
          <span>문구를 저장하셨나요?</span>
          <button onClick={() => downloadMnemonicCSV(mnemonic)}>CSV로 저장하기</button>
        </S.ButtonWrapper>
        <S.Button onClick={handleClick}>지갑 등록하러 가기</S.Button>
      </S.Block>
    </S.Container>
  )
}

export default WalletRegister
