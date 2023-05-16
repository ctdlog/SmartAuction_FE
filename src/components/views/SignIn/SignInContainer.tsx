import { useState } from 'react'

import GenerateMnemonic from '@/components/views/SignIn/GenerateMnemonic'
import LoginForm from '@/components/views/SignIn/LoginForm'
import MnemonicVerify from '@/components/views/SignIn/MnemonicVerify'

import { MnemonicContext } from './SignInContainer.context'

const SignInContainer = () => {
  const [signInState, setSignInState] = useState<'login' | 'generate' | 'verify'>('login')
  const [mnemonic, setMnemonic] = useState<string>(null as unknown as string)

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
        <GenerateMnemonic setSignInStateToVerify={setSignInStateToVerify} />
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

  return <LoginForm setSignInStateToGenerate={setSignInStateToGenerate} />
}

export default SignInContainer
