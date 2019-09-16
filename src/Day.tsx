import React, { Fragment } from 'react'
import { RouteComponentProps } from 'react-router'
import AppData, { EffortType, WorkoutMove } from 'app-data'
import css from '@emotion/css'
import { bgBlue } from 'ui/colors'
import { flexContainer } from 'ui/helpers'
import { fontSizeSmall } from 'ui/typo'
import { AppLink } from 'ui/Button'
import { getRoute } from 'Routes'

type Props = RouteComponentProps<{ day: string; week: string }> & {}

function getWarmupNumbers(m: WorkoutMove) {
  if (!('weightLbs' in m) || typeof m.weightLbs !== 'number') return
  const weight = m.weightLbs
  return [0.6, 0.7, 0.8, 0.9].map(n => Math.round((weight / 5) * n) * 5).join('/')
}

function Move(m: WorkoutMove) {
  if ('reps' in m) {
    return (
      <>
        {m.reps} x {m.move.effortType === EffortType.Weight ? `${m.weightLbs}lbs` : 'BW'} of{' '}
        <em>{m.move.name}</em>
      </>
    )
  }
  return (
    <>
      {'distance' in m ? `${m.distance} m` : `${m.time} mins`} at {m.pace} of <em>{m.move.name}</em>
    </>
  )
}

export function Day({ match: { params } }: Props) {
  const week = Number(params.week)
  const day = Number(params.day)
  const { workouts } = AppData.weeks[week].days[day]
  return (
    <>
      {workouts.map((w, wIdx) => (
        <div
          key={wIdx}
          css={css`
            background: ${wIdx % 2 === 0 ? bgBlue : 'white'};
          `}
        >
          <div
            css={css`
              ${flexContainer('center', 'flex-start')};
              padding: 12px 24px;
              font-size: ${fontSizeSmall};
            `}
          >
            <div css={{ flex: 'none', marginRight: 12 }}>{w.sets} sets</div>
            <ul css={{ 'li:not(:last-child)': { marginBottom: 8 } }}>
              {w.moves.map((m, mIdx) => (
                <Fragment key={mIdx}>
                  {mIdx === 0 && wIdx === 0 && (
                    <li>
                      Warmup ({getWarmupNumbers(m)} lbs) of <em>{m.move.name}</em>
                    </li>
                  )}
                  <li>
                    <Move {...m} />
                  </li>
                </Fragment>
              ))}
            </ul>
          </div>
          <div css={{ textAlign: 'center', paddingBottom: 12 }}>
            <em>Rest for {w.restSeconds} seconds between sets</em>
          </div>
        </div>
      ))}
      <div css={flexContainer()}>
        <AppLink to={getRoute.cooldown()} variant={AppLink.Variant.Secondary}>
          Cooldown
        </AppLink>
      </div>
    </>
  )
}
