import { useState } from 'react'

import GenerateMnemonic from '@/components/views/SignIn/GenerateMnemonic'
import LoginForm from '@/components/views/SignIn/LoginForm'
import MnemonicVerify from '@/components/views/SignIn/MnemonicVerify'

const SignInContainer = () => {
  const [signInState, setSignInState] = useState<'login' | 'generate' | 'verify'>('login')

  const setSignInStateToGenerate = () => {
    setSignInState('generate')
  }

  const setSignInStateToVerify = () => {
    setSignInState('verify')
  }

  if (signInState === 'generate') {
    return <GenerateMnemonic setSignInStateToVerify={setSignInStateToVerify} />
  }

  if (signInState === 'verify') {
    return <MnemonicVerify />
  }

  return <LoginForm setSignInStateToGenerate={setSignInStateToGenerate} />
}

export default SignInContainer
