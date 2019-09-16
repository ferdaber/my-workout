import { CSSProperties } from 'react'
import { CSSObject } from '@emotion/serialize'

export function flexContainer(
  alignItems: CSSProperties['alignItems'] = 'center',
  justifyContent: CSSProperties['justifyContent'] = 'center',
  flexDirection: CSSProperties['flexDirection'] = 'row'
): CSSObject {
  return {
    display: 'flex',
    flexDirection,
    alignItems,
    justifyContent,
  }
}

export function cssSize(
  height: CSSProperties['height'] = '100%',
  width: CSSProperties['width'] = '100%'
): CSSObject {
  return {
    height,
    width,
  }
}
