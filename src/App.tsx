import React, { ReactNode, useState, useLayoutEffect, useEffect } from 'react'
import { StylePortal } from '@ferdaber/utils'
import { rootNode } from 'ui/root'
import css from '@emotion/css'
import { Routes } from 'Routes'

const initHeight = window.innerHeight
export function NormalizeViewport({ children }: { children?: ReactNode }) {
  const [height, setHeight] = useState(initHeight)
  useEffect(() => {
    const cb = () => setHeight(window.innerHeight)
    window.addEventListener('resize', cb)
    return () => {
      window.removeEventListener('resize', cb)
    }
  }, [])
  useLayoutEffect(() => {
    rootNode.style.height = `${height}px`
  }, [height])
  return (
    <>
      <StylePortal
        css={css`
          width: 100vw;
          overflow: hidden;
        `}
      >
        {rootNode}
      </StylePortal>
      {children}
    </>
  )
}

export function App() {
  return (
    <NormalizeViewport>
      <Routes />
    </NormalizeViewport>
  )
}
