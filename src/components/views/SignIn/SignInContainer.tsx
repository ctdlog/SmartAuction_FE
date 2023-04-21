import { useState } from 'react'

import GenerateMnemonic from '@/components/views/SignIn/GenerateMnemonic'
import LoginForm from '@/components/views/SignIn/LoginForm'
import MnemonicVerify from '@/components/views/SignIn/MnemonicVerify'

import { MnemonicContext, TokenContext } from './SignInContainer.context'

const SignInContainer = () => {
  const [signInState, setSignInState] = useState<'login' | 'generate' | 'verify'>('login')
  const [mnemonic, setMnemonic] = useState<string>(null as unknown as string)
  const [accessToken, setAccessToken] = useState<string>(null as unknown as string)
  const [refreshToken, setRefreshToken] = useState<string>(null as unknown as string)

  const setSignInStateToGenerate = () => {
    setSignInState('generate')
  }

  const setSignInStateToVerify = () => {
    setSignInState('verify')
  }

  if (signInState === 'generate') {
    return (
      <MnemonicContext.Provider
        value={{
          mnemonic,
          setMnemonic,
        }}
      >
        <TokenContext.Provider
          value={{
            accessToken,
            setAccessToken,
            refreshToken,
            setRefreshToken,
          }}
        >
          <GenerateMnemonic setSignInStateToVerify={setSignInStateToVerify} />
        </TokenContext.Provider>
      </MnemonicContext.Provider>
    )
  }

  if (signInState === 'verify') {
    return (
      <MnemonicContext.Provider
        value={{
          mnemonic,
          setMnemonic,
        }}
      >
        <MnemonicVerify />
      </MnemonicContext.Provider>
    )
  }

  return (
    <TokenContext.Provider
      value={{
        accessToken,
        setAccessToken,
        refreshToken,
        setRefreshToken,
      }}
    >
      <LoginForm setSignInStateToGenerate={setSignInStateToGenerate} />
    </TokenContext.Provider>
  )
}

export default SignInContainer
