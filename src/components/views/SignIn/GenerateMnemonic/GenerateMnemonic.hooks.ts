import { useContext, useEffect } from 'react'

import { MnemonicContext } from '@/components/views/SignIn/SignInContainer.context'
import { generateRandomMnemonic } from '@/services/api/user'

const useMnemonic = () => {
  const { mnemonic, setMnemonic } = useContext(MnemonicContext)

  useEffect(() => {
    const generateRandomMnemonicfromAPI = async () => {
      const { statusCode, payload } = await generateRandomMnemonic()
      if (statusCode === 201) {
        setMnemonic(payload.mnemonic)
      }
    }

    generateRandomMnemonicfromAPI()
  }, [setMnemonic])

  return { mnemonic }
}

export default useMnemonic
