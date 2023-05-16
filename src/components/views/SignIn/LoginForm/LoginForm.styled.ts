import styled from '@emotion/styled'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`flex h-screen flex-col items-center justify-center bg-background text-gray-100`}
`

const Form = styled.form`
  ${tw`flex w-96 flex-col items-center justify-center gap-4 rounded-lg bg-zinc-800 px-8 py-12`}

  label {
    ${tw`flex w-full flex-col items-start gap-2`}
  }

  input {
    ${tw`w-full rounded-md bg-zinc-700 px-4 py-2 outline-none`}
  }

  small {
    ${tw`text-red-500`}
  }
`

const VerificationCodeBlock = styled.div`
  ${tw`flex w-full flex-col justify-between gap-2`}
`

const VerificationCodeInputWrapper = styled.div`
  ${tw`flex w-full justify-between gap-2`}

  input {
    ${tw`w-4/5 rounded-md px-4 py-2 outline-none`}
    &[type='number']::-webkit-outer-spin-button,
      &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  button {
    ${tw`w-1/5 rounded-md bg-blue-500 px-4 py-2`}
  }
`

const ResendEmailWrapper = styled.div`
  ${tw`flex w-full items-center justify-center gap-4`}

  button {
    ${tw`w-1/3 rounded-md bg-teal-500 px-4 py-2`}

    &:disabled {
      ${tw`cursor-not-allowed bg-gray-500`}
    }
  }
`

const Button = styled.button`
  ${tw`w-full rounded-md bg-blue-500 px-4 py-2`}

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

export { Container, Form, VerificationCodeBlock, VerificationCodeInputWrapper, ResendEmailWrapper, Button, LinkWrapper }
