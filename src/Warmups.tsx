import React from 'react'
import css from '@emotion/css'
import { fontSizeSmallPx } from 'ui/typo'

export function Warmups() {
  return (
    <div>
      <h1 css={{ textAlign: 'center' }}>Warmups</h1>
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
        <li>
          <div>
            Foam roll on:
            <ul
              css={css`
                list-style-type: circle;
                padding-left: 32px;
              `}
            >
              <li>Calves</li>
              <li>Quads</li>
              <li>Hamstrings</li>
              <li>Glutes</li>
              <li>Lats</li>
              <li>Inner thighs</li>
            </ul>
          </div>
        </li>
        <li>World&apos;s greatest stretch (5x on each side)</li>
        <li>Rotator cuff rotations (10x each side)</li>
        <li>Hip flexor stretch (30 seconds)</li>
        <li>Kettlebell hip flexor raises (6kg, 12x each side)</li>
        <li>Frog stretch (30 seconds)</li>
        <li>Ankle stretch (30 seconds)</li>
        <li>Breathing drill (8 breaths)</li>
        <li>Jog (5 minutes, level 8 incline, 5 mph)</li>
      </ul>
    </div>
  )
}
