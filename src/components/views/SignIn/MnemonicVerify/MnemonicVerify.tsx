import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import Title from '@/components/common/Title'
import * as S from '@/components/views/SignIn/MnemonicVerify/MnemonicVerify.styled'
import ROUTE from '@/constants/route'
import { verifyMnemonic } from '@/services/api/user'

interface FormValues {
  mnemonic: string
  password: string
}

const MnemonicVerify = () => {
  const { push } = useRouter()
  const { register, handleSubmit } = useForm<FormValues>()
  const onSubmit = async ({ mnemonic, password }: FormValues) => {
    const { statusCode, payload } = await verifyMnemonic(mnemonic, password)
    if (statusCode === 201) {
      alert('지갑이 등록되었습니다.')
      push(ROUTE.HOME)
    }
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Title size='4'>Mnemonic과 로그인 시 입력했던 패스워드를 입력해주세요</Title>
        <S.Input
          type='text'
          placeholder='mnemonic'
          {...register('mnemonic', {
            required: true,
          })}
        />
        <S.Input
          type='password'
          placeholder='password'
          {...register('password', {
            required: true,
          })}
        />
        <S.Button type='submit'>제출</S.Button>
      </S.Form>
    </S.Container>
  )
}

export default MnemonicVerify
