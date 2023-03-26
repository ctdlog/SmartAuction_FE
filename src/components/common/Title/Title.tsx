import tw from 'twin.macro'

import { getFontStyles } from '@/styles/font'
import { Language, Size } from '@/types/common/font'

interface Props {
  children: React.ReactNode
  size?: Size
  language?: Language
  className?: string
}

const Title = ({ children, size = '1', language = 'english', className }: Props) => {
  const { fontFamily, fontSize } = getFontStyles({
    size,
    language,
    style: 'title',
  })

  return (
    <h1 css={[tw`font-bold`, fontFamily, fontSize]} className={className}>
      {children}
    </h1>
  )
}

export default Title
