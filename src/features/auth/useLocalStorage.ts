import { useEffect, useState } from 'react'

import { getAccessTokenFromLocalStorage } from './token'

const useLocalStorage = () => {
  const [accessToken, setAccessToken] = useState('')

  useEffect(() => {
    const token = getAccessTokenFromLocalStorage()
    if (token) {
      setAccessToken(token)
    }
  }, [])

  return {
    accessToken,
    setAccessToken,
  }
}

export default useLocalStorage
