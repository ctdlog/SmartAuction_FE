import tw from 'twin.macro'

import { getFontStyles } from '@/styles/font'
import { Language, Size } from '@/types/common/font'

interface Props {
  children: React.ReactNode
  size?: Size
  language?: Language
  className?: string
}

const Subtitle = ({ children, size = '1', language = 'english', className }: Props) => {
  const { fontFamily, fontSize } = getFontStyles({
    size,
    language,
    style: 'subtitle',
  })

  return (
    <h2 css={[tw`font-medium`, fontFamily, fontSize]} className={className}>
      {children}
    </h2>
  )
}

export default Subtitle
