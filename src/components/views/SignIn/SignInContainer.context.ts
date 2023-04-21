import { createContext, Dispatch, SetStateAction } from 'react'

interface MnemonicContextProps {
  mnemonic: string
  setMnemonic: Dispatch<SetStateAction<string>>
}

export const MnemonicContext = createContext<MnemonicContextProps>({
  mnemonic: null as unknown as string,
  setMnemonic: () => null as unknown as void,
})

interface TokenContextProps {
  accessToken: string
  setAccessToken: Dispatch<SetStateAction<string>>
  refreshToken: string
  setRefreshToken: Dispatch<SetStateAction<string>>
}

export const TokenContext = createContext<TokenContextProps>({
  accessToken: null as unknown as string,
  setAccessToken: () => null as unknown as void,
  refreshToken: null as unknown as string,
  setRefreshToken: () => null as unknown as void,
})
