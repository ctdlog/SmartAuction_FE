import React from 'react'

import { Global } from '@emotion/react'
import { css, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css({
  // Add your custom styles here
})

const GlobalStyles = () => <Global styles={customStyles} />

export default GlobalStyles
