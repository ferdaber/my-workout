import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { lazyLoad } from '@ferdaber/utils'
import { flexContainer, cssSize } from 'ui/helpers'

const Home = lazyLoad(() => import('Home').then(m => m.Home))
const Week = lazyLoad(() => import('Week').then(m => m.Week))

export function Routes() {
  return (
    <Suspense fallback={<div css={[flexContainer(), cssSize()]}>Loading data...</div>}>
      <BrowserRouter>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route component={Week} path="/week/:week" />
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}

export const getRoute = {
  week(weekNumber: number) {
    return `/week/${weekNumber}`
  },
  day(weekNumber: number, dayNumber: number) {
    return `${getRoute.week(weekNumber)}/day/${dayNumber}`
  },
}
