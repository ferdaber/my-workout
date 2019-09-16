import React from 'react'
import css from '@emotion/css'
import { fontSizeSmallPx } from 'ui/typo'

export function Cooldown() {
  return (
    <div>
      <h1 css={{ textAlign: 'center' }}>Cooldown</h1>
      <ul
        css={css`
          list-style-type: disc;
          padding-left: 32px;
          font-size: ${fontSizeSmallPx};

          > li {
            padding: 4px;
          }
        `}
      >
        <li>Jog (5 minutes, level 8 incline, 5 mph)</li>
      </ul>
    </div>
  )
}
