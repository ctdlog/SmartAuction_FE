import { useState } from 'react'

import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import Subtitle from '@/components/common/Subtitle'
import ROUTE from '@/constants/route'
import { emailVerify, signUp } from '@/services/api/user'

import * as S from './SignUpContainer.styled'

interface FormValues {
  email: string
  password: string
  passwordConfirm: string
}

const SignUpContainer = () => {
  const { register, handleSubmit, watch } = useForm<FormValues>()
  const { push } = useRouter()
  //   const [isEmailVerifying, setIsEmailVerifying] = useState(false)
  //   const [verificationCode, setVerificationCode] = useState<number | null>(null)

  const onSubmit = async ({ email, password }: FormValues) => {
    const { statusCode } = await signUp(email, password)
    if (statusCode === 201) {
      alert('회원가입이 완료되었습니다.')
      push(ROUTE.SIGN_IN)
    }
  }

  //   const handleClickVerifyEmail = async (code: number | null) => {
  //     if (!code) {
  //       throw new Error('인증번호가 입력되지 않았습니다.')
  //     }
  //     await emailVerify(code)
  //   }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <label>
          <Subtitle size='4'>Email</Subtitle>
          <input type='text' placeholder='email' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        </label>
        {/* {isEmailVerifying && (
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
        )} */}
        <label>
          <Subtitle size='4'>Password</Subtitle>
          <input
            type='password'
            placeholder='password'
            {...register('password', { required: true, minLength: 6, maxLength: 20 })}
          />
        </label>
        <label>
          <Subtitle size='4'>Password Confirm</Subtitle>
          <input
            type='password'
            placeholder='re-enter password'
            {...register('passwordConfirm', {
              required: true,
              minLength: 6,
              maxLength: 20,
              validate: (value) => value === watch('password'),
            })}
          />
        </label>
        <S.Button type='submit'>Sign Up</S.Button>
      </S.Form>
    </S.Container>
  )
}

export default SignUpContainer
