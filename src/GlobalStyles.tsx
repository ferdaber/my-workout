import React from 'react'
import { Global } from '@emotion/core'
import { black } from 'ui/colors'
import { fontSizeHugePx, fontSizeLargePx, fontSizePx } from 'ui/typo'

export const globalStyles = (
  <Global
    styles={{
      html: {
        color: black,
      },

      h1: {
        fontSize: fontSizeHugePx,
      },

      h2: {
        fontSize: fontSizeLargePx,
      },

      h3: {
        fontSize: fontSizePx,
      },
    }}
  />
)
