import styled from '@emotion/styled'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`flex h-screen flex-col items-center justify-center`}
`

const Form = styled.form`
  ${tw`flex w-1/2 flex-col items-center justify-center gap-8 rounded-lg border border-gray-300 px-8 py-12 shadow-lg`}
`

const Input = styled.input`
  ${tw`w-3/4 rounded-lg border border-gray-300 px-4 py-2 outline-none`}
`

const Button = styled.button`
  ${tw`rounded-lg bg-blue-500 px-4 py-2 text-white`}
`

export { Container, Form, Input, Button }
