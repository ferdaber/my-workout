import React from 'react'
import AppData from 'app-data'
import { AppLink } from 'ui/Button'
import { flexContainer, cssSize } from 'ui/helpers'
import { getRoute } from 'Routes'

export function Home() {
  return (
    <div css={[flexContainer(), cssSize()]}>
      <div
        css={css`
          display: grid;
          grid-template-columns: max-content;
          grid-gap: 16px 0;
        `}
      >
        <h1>Pick a week</h1>
        {AppData.weeks.map((_, i) => (
          <AppLink key={i} to={getRoute.week(i)}>
            Week {i + 1}
          </AppLink>
        ))}
      </div>
    </div>
  )
}
