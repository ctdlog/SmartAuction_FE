import { useState } from 'react'

import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import Subtitle from '@/components/common/Subtitle'
import { emailNotVerifiedRole } from '@/components/views/SignIn/SignInContainer.constants'
import ROUTE from '@/constants/route'
import { setAccessTokenToLocalStorage } from '@/features/auth/token'
import { emailVerify, getUserInfo, signIn } from '@/services/api/user'

import * as S from './SignInContainer.styled'

interface FormValues {
  email: string
  password: string
  passwordConfirm: string
}

const SignInContainer = () => {
  const { register, handleSubmit } = useForm<FormValues>()
  const { push } = useRouter()
  const [isEmailVerifying, setIsEmailVerifying] = useState(false)
  const [verificationCode, setVerificationCode] = useState<number | null>(null)

  const onSubmit = async ({ email, password }: FormValues) => {
    const {
      statusCode,
      payload: { acToken },
    } = await signIn(email, password)
    if (statusCode === 201) {
      setAccessTokenToLocalStorage(acToken)
      const {
        payload: { role },
      } = await getUserInfo()
      if (role === emailNotVerifiedRole) {
        setIsEmailVerifying(true)
        return
      }

      push(ROUTE.HOME)
    }
  }

  const handleClickVerifyEmail = async (code: number | null) => {
    if (!code) {
      throw new Error('인증번호가 입력되지 않았습니다.')
    }

    const { statusCode } = await emailVerify(code)
    if (statusCode === 201) {
      alert('이메일 인증이 완료되었습니다.')
      push(ROUTE.HOME)
    }
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign In</h1>
        <label>
          <Subtitle size='4'>Email</Subtitle>
          <input type='text' placeholder='email' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        </label>
        {isEmailVerifying && (
          <S.VerificationCodeBlock>
            <input
              type='number'
              placeholder='인증번호'
              onChange={(e) => {
                setVerificationCode(Number(e.target.value))
              }}
            />
            <button onClick={() => handleClickVerifyEmail(verificationCode)}>확인</button>
          </S.VerificationCodeBlock>
        )}
        <label>
          <Subtitle size='4'>Password</Subtitle>
          <input
            type='password'
            placeholder='password'
            {...register('password', { required: true, minLength: 6, maxLength: 20 })}
          />
        </label>
        <S.Button type='submit'>Sign In</S.Button>
      </S.Form>
    </S.Container>
  )
}

export default SignInContainer
