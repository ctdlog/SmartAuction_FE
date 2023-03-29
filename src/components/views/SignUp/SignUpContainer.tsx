import { useState } from 'react'

import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import Subtitle from '@/components/common/Subtitle'
import Title from '@/components/common/Title'
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

  const onSubmit = async ({ email, password }: FormValues) => {
    const { statusCode } = await signUp(email, password)
    if (statusCode === 201) {
      alert('회원가입이 완료되었습니다.')
      push(ROUTE.SIGN_IN)
    }
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Title size='4'>Sign Up</Title>
        <label>
          <Subtitle size='4'>Email</Subtitle>
          <input type='text' placeholder='email' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        </label>
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
