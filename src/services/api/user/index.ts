import api from '@/services/api'
import type {
  SignUpResponse,
  SignInResponse,
  EmailVerifyResponse,
  GenerateRandomMnemonicResponse,
} from '@/services/api/user/types'
import { User } from '@/types/common/auth'

export const signUp = (email: string, password: string) => {
  return api.post<SignUpResponse>('/users/sign-up', { email, password })
}

export const signIn = (email: string, password: string) => {
  return api.post<SignInResponse>('/users/sign-in', { email, password })
}

export const emailVerify = (verificationCode: number) => {
  return api.post<EmailVerifyResponse>('users/sign-up/verify', { verificationCode })
}

export const resendEmailVerify = () => {
  return api.post<EmailVerifyResponse>('users/sign-up/resend')
}

export const getUserInfo = () => {
  return api.get<User>('/users')
}

export const generateRandomMnemonic = () => {
  return api.post<GenerateRandomMnemonicResponse>('/users/wallet/mnemonic')
}

export const verifyMnemonic = (mnemonic: string, password: string) => {
  return api.post('/users/mnemonic/verify', { mnemonic, password })
}
