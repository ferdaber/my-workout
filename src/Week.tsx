import React from 'react'
import { RouteComponentProps, Switch, Route } from 'react-router'
import AppData from 'app-data'
import { grayDark } from 'ui/colors'
import { flexContainer, cssSize } from 'ui/helpers'
import { AppLink } from 'ui/Button'
import { getRoute } from 'Routes'
import { Day } from 'Day'

type Props = RouteComponentProps<{ week: string }> & {}

export function Week({ match: { params } }: Props) {
  const week = Number(params.week)
  const { title, days } = AppData.weeks[week]
  return (
    <div css={[flexContainer('stretch', 'flex-start', 'column'), cssSize()]}>
      <div css={{ flex: 'none' }}>
        <h1 css={{ textAlign: 'center' }}>{title}</h1>
        <h2 css={{ textAlign: 'center', color: grayDark }}>Week {week + 1}</h2>
      </div>
      <div css={{ flex: '1 0 0', minHeight: 0, overflowY: 'auto' }}>
        <Switch>
          <Route exact path="/week/:week">
            <div
              css={css`
                display: grid;
                grid-template-columns: max-content;
                grid-gap: 16px 0;
                justify-content: center;
              `}
            >
              <AppLink to={getRoute.warmup()} type={AppLink.Type.Ghost}>
                Warmup
              </AppLink>
              {days.map((_, i) => (
                <AppLink key={i} to={getRoute.day(week, i)}>
                  Day {i + 1}
                </AppLink>
              ))}
            </div>
          </Route>
          <Route component={Day} path={`/week/:week/day/:day`} week={week} />
        </Switch>
      </div>
    </div>
  )
}
