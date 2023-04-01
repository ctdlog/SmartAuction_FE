import { createContext, Dispatch, SetStateAction } from 'react'

interface MnemonicContextProps {
  mnemonic: string | null
  setMnemonic: Dispatch<SetStateAction<string | null>>
}

export const MnemonicContext = createContext<MnemonicContextProps>({
  mnemonic: null,
  setMnemonic: () => null,
})
