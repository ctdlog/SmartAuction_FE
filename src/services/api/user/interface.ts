export interface SignUpResponse {
  id: number
  email: string
}

export interface SignInResponse {
  acToken: string
  acTokenExpiresAt: number
  rfToken: string
  rfTokenExpiresAt: number
}

export interface EmailVerifyResponse {
  id: number
  role: number
}

export interface UserInformation {
  id: number
  email: string
  nickname: string
  role: number
  registeredAt: string
  updatedAt: string
}
