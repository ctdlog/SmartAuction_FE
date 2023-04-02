import { useState } from 'react'

import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import Subtitle from '@/components/common/Subtitle'
import * as S from '@/components/views/SignIn/LoginForm/LoginForm.styled'
import { emailNotVerifiedRole, walletNotRegisteredRole } from '@/components/views/SignIn/SignInContainer.constants'
import ROUTE from '@/constants/route'
import { setAccessTokenToLocalStorage } from '@/features/auth/token'
import { emailVerify, getUserInfo, signIn } from '@/services/api/user'

interface FormValues {
  email: string
  password: string
  passwordConfirm: string
}

interface Props {
  setSignInStateToGenerate: () => void
}

const LoginForm = ({ setSignInStateToGenerate }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const { push } = useRouter()
  const [isRequiredEmailVerification, setIsRequiredEmailVerification] = useState(false)
  const [verificationCode, setVerificationCode] = useState<number | null>(null)

  const onSubmit = async ({ email, password }: FormValues) => {
    try {
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
          setIsRequiredEmailVerification(true)
          return
        }

        if (role === walletNotRegisteredRole) {
          setSignInStateToGenerate()
          return
        }

        push(ROUTE.HOME)
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data.message === 'USER NOT EXIST') {
          alert('존재하지 않는 이메일입니다. 회원가입을 시도해주세요.')
        }
        if (error.response?.data.message === 'PASSWORD NOT MATCH') {
          alert('비밀번호가 일치하지 않습니다.')
        }
      }
    }
  }

  const handleClickVerifyEmail = async (code: number | null) => {
    if (!code) {
      throw new Error('인증번호가 입력되지 않았습니다.')
    }

    const { statusCode } = await emailVerify(code)
    if (statusCode === 201) {
      alert('이메일 인증이 완료되었습니다.')
      setSignInStateToGenerate()
    }
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign In</h1>
        <label>
          <Subtitle size='4'>Email</Subtitle>
          <input
            type='text'
            placeholder='email'
            {...register('email', {
              required: {
                value: true,
                message: '이메일을 입력해주세요.',
              },
              pattern: {
                value: /^([a-zA-Z0-9.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,})$/,
                message: '이메일 형식이 올바르지 않습니다.',
              },
            })}
          />
          <small>{errors.email?.message}</small>
        </label>
        {isRequiredEmailVerification && (
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
            {...register('password', {
              required: {
                value: true,
                message: '비밀번호를 입력해주세요.',
              },
              minLength: {
                value: 6,
                message: '비밀번호는 6자 이상이어야 합니다.',
              },
              maxLength: {
                value: 20,
                message: '비밀번호는 20자 이하여야 합니다.',
              },
            })}
          />
          <small>{errors.password?.message}</small>
        </label>
        <S.Button type='submit'>Sign In</S.Button>
      </S.Form>
    </S.Container>
  )
}

export default LoginForm
