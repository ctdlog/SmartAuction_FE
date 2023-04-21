import { createContext, Dispatch, SetStateAction } from 'react'

interface AuthContextProps {
  isLoggedIn: boolean
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
  isRequiredEmailVerification: boolean
  setIsRequiredEmailVerification: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: null as unknown as boolean,
  setIsLoggedIn: () => null as unknown as void,
  isRequiredEmailVerification: null as unknown as boolean,
  setIsRequiredEmailVerification: () => null as unknown as void,
})
