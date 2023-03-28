import api from '@/services/api'
import { SignUpResponse, SignInResponse, EmailVerifyResponse, UserInformation } from '@/services/api/user/interface'

export const signUp = (email: string, password: string) => {
  return api.post<SignUpResponse>('/users/sign-up', { email, password })
}

export const signIn = (email: string, password: string) => {
  return api.post<SignInResponse>('/users/sign-in', { email, password })
}

export const emailVerify = (verificationCode: number) => {
  return api.post<EmailVerifyResponse>('users/sign-up/verify', { verificationCode })
}

export const resendEmailVerify = (email: string, code: number) => {
  return api.post<EmailVerifyResponse>('users/sign-up/resend', { email, code })
}

export const getUserInfo = () => {
  return api.get<UserInformation>('/users')
}
