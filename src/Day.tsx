import React from 'react'
import { RouteComponentProps } from 'react-router'
import AppData, { EffortType } from 'app-data'
import css from '@emotion/css'
import { bgBlue } from 'ui/colors'
import { flexContainer } from 'ui/helpers'
import { fontSizeSmall } from 'ui/typo'

type Props = RouteComponentProps<{ day: string; week: string }> & {}

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
                  {m.reps} x {m.move.effortType === EffortType.Weight ? `${m.weightLbs}lbs` : 'BW'}{' '}
                  of <em>{m.move.name}</em>
                </li>
              ))}
            </ul>
          </div>
          <div css={{ textAlign: 'center', paddingBottom: 12 }}>
            <em>Rest for {w.restSeconds} seconds between sets</em>
          </div>
        </div>
      ))}
    </>
  )
}
