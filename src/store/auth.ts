import { create } from 'zustand'

import { User } from '@/types/common/auth'

export const useAuthStore = create((set) => ({
  id: 0,
  email: '',
  nickname: '',
  role: 0,
  registeredAt: '',
  updatedAt: '',
  setUserInfo: (userInfo: User) => set(userInfo),
}))
