import 'core-js'
import React from 'react'
import { render } from 'react-dom'
import { css } from '@emotion/core'

const styles = css`
  font-weight: bold;
`

const App = () => (
  <div className="global-class container mx-auto text-center py-4" css={styles}>
    Hi!
  </div>
)

render(<App />, document.getElementById('root'))
