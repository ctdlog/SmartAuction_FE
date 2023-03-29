import { useEffect, useState } from 'react'

import { generateRandomMnemonic } from '@/services/api/user'

const useMnemonic = () => {
  const [mnemonic, setMnemonic] = useState('')

  useEffect(() => {
    const generateRandomMnemonicfromAPI = async () => {
      const { statusCode, payload } = await generateRandomMnemonic()
      if (statusCode === 201) {
        setMnemonic(payload.mnemonic)
      }
    }

    generateRandomMnemonicfromAPI()
  }, [])

  return { mnemonic }
}

export default useMnemonic
