import 'core-js'
import React from 'react'
import { css } from '@emotion/core'
import { render } from 'react-dom'
import { globalStyles } from 'GlobalStyles'
import { App } from 'App'

window['css'] = css

render(
  <>
    {globalStyles}
    <App />
  </>,
  document.getElementById('root')
)
