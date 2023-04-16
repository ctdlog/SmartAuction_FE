import { createContext, Dispatch, SetStateAction } from 'react'

interface MnemonicContextProps {
  mnemonic: string
  setMnemonic: Dispatch<SetStateAction<string>>
}

export const MnemonicContext = createContext<MnemonicContextProps>({
  mnemonic: null as unknown as string,
  setMnemonic: () => null as unknown as void,
})
