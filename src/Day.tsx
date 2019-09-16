import React from 'react'
import { RouteComponentProps } from 'react-router'
import AppData, { EffortType, WorkoutMove } from 'app-data'
import css from '@emotion/css'
import { bgBlue } from 'ui/colors'
import { flexContainer } from 'ui/helpers'
import { fontSizeSmall } from 'ui/typo'
import { AppLink } from 'ui/Button'
import { getRoute } from 'Routes'

type Props = RouteComponentProps<{ day: string; week: string }> & {}

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
      {workouts.map((w, i) => (
        <div
          key={i}
          css={css`
            background: ${i % 2 === 0 ? bgBlue : 'white'};
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
            <ul>
              {w.moves.map((m, i) => (
                <li key={i} css={{ '&:not(:last-child)': { marginBottom: 8 } }}>
                  <Move {...m} />
                </li>
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
