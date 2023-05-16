import styled from '@emotion/styled'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`flex h-screen flex-col items-center justify-center bg-background text-gray-100`}
`

const Form = styled.form`
  ${tw`flex w-96 flex-col items-center justify-center gap-6 rounded-xl bg-zinc-800 px-8 py-12`}

  label {
    ${tw`flex w-full flex-col items-start gap-2`}
  }

  input {
    ${tw`w-full rounded-lg bg-zinc-700 px-4 py-2 outline-none`}
  }

  small {
    ${tw`text-red-500`}
  }
`

const VerificationCodeBlock = styled.div`
  ${tw`flex w-full justify-between gap-2`}

  input {
    ${tw`w-4/5 rounded-md border border-gray-300 px-4 py-2 outline-none`}
  }
`

const Button = styled.button`
  ${tw`w-full rounded-md bg-blue-500 px-4 py-2 text-white`}

  &:disabled {
    ${tw`cursor-not-allowed bg-gray-500`}
  }
`

const LinkWrapper = styled.div`
  ${tw`flex w-full justify-center gap-2`}

  a {
    ${tw`text-blue-500`}
  }
`

export { Container, Form, VerificationCodeBlock, Button, LinkWrapper }
