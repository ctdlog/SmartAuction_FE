import styled from '@emotion/styled'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`flex h-screen flex-col items-center justify-center`}
`

const Form = styled.form`
  ${tw`flex w-96 flex-col items-center justify-center gap-8 rounded-lg border border-gray-300 px-8 py-12 shadow-lg`}

  label {
    ${tw`flex w-full flex-col items-start gap-2`}
  }

  input {
    ${tw`w-full rounded-lg border border-gray-300 px-4 py-2 outline-none`}
  }

  small {
    ${tw`text-red-500`}
  }
`

const VerificationCodeBlock = styled.div`
  ${tw`flex w-full justify-between gap-2`}

  input {
    ${tw`w-4/5 rounded-lg border border-gray-300 px-4 py-2 outline-none`}
  }
`

const Button = styled.button`
  ${tw`rounded-lg bg-blue-500 px-4 py-2 text-white`}
`
export { Container, Form, VerificationCodeBlock, Button }
