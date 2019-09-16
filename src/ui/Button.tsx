import { cx } from '@ferdaber/utils'
import React, { forwardRef } from 'react'
import { blueDark, purpleDark } from './colors'
import { registerCSSClass } from './util'
import { fontSizeSmallPx, fontSizePx, fontSizeLargePx } from './typo'
import { Link as RouterLink, LinkProps } from 'react-router-dom'

enum ButtonVariant {
  Primary,
  Secondary,
}

enum ButtonType {
  Default,
  Ghost,
}

enum ButtonSize {
  Small,
  Medium,
  Large,
}

type Props<T extends keyof JSX.IntrinsicElements = 'button'> = Overwrite<
  NativeHTML<T, 'ref'>,
  {
    variant?: ButtonVariant
    type?: ButtonType
    size?: ButtonSize
  }
>

const textColors: Record<ButtonVariant, string> = {
  [ButtonVariant.Primary]: 'white',
  [ButtonVariant.Secondary]: 'white',
}

const textSizes: Record<ButtonSize, string> = {
  [ButtonSize.Small]: fontSizeSmallPx,
  [ButtonSize.Medium]: fontSizePx,
  [ButtonSize.Large]: fontSizeLargePx,
}

const colors: Record<ButtonVariant, string> = {
  [ButtonVariant.Primary]: blueDark,
  [ButtonVariant.Secondary]: purpleDark,
}

const xPadding: Record<ButtonSize, number> = {
  [ButtonSize.Small]: 6,
  [ButtonSize.Medium]: 12,
  [ButtonSize.Large]: 18,
}

const yPadding: Record<ButtonSize, number> = {
  [ButtonSize.Small]: 4,
  [ButtonSize.Medium]: 6,
  [ButtonSize.Large]: 8,
}

const klass = registerCSSClass('ui-button')
const getButtonStyle = ({
  size = ButtonSize.Medium,
  type = ButtonType.Default,
  variant = ButtonVariant.Primary,
}: {
  variant?: ButtonVariant
  type?: ButtonType
  size?: ButtonSize
}) => css`
  display: inline-block;
  font-size: ${textSizes[size]};
  text-align: center;
  padding: ${yPadding[size]}px ${xPadding[size]}px;
  background-color: ${type === ButtonType.Default ? colors[variant] : 'none'};
  border-style: solid;
  border-color: ${type === ButtonType.Default ? 'none' : colors[variant]};
  border-width: ${type === ButtonType.Default ? 0 : 2}px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 150ms;
  text-decoration: none;

  && {
    color: ${type === ButtonType.Ghost ? colors[variant] : textColors[variant]};
  }

  &:hover,
  &:focus {
    outline: none;
    transform: scale(1.02);
  }

  &:active {
    border-style: solid;
    transform: scale(0.98);
  }
`

const _Button = forwardRef(function Button(props: Props, ref: RefOf<'button'>) {
  const { className, variant, type, size, ...rest } = props
  return (
    <button
      {...rest}
      ref={ref}
      className={cx(className, klass)}
      css={getButtonStyle({ size, type, variant })}
    />
  )
})

const _Anchor = forwardRef(function Anchor(props: Props<'a'>, ref: RefOf<'a'>) {
  const { className, variant, type, size, ...rest } = props
  return (
    <a
      {...rest}
      ref={ref}
      className={cx(className, klass)}
      css={getButtonStyle({ size, type, variant })}
    />
  )
})

const _Link = forwardRef(function Link(
  props: Props<'a'> & { to: LinkProps['to'] },
  ref: RefOf<'a'>
) {
  const { className, variant, type, size, ...rest } = props
  return (
    <RouterLink
      {...rest}
      className={cx(className, klass)}
      css={getButtonStyle({ size, type, variant })}
      innerRef={ref}
    />
  )
})

export const Button = Object.assign(_Button, {
  Variant: ButtonVariant,
  Type: ButtonType,
  Size: ButtonSize,
})

export const Anchor = Object.assign(_Anchor, {
  Variant: ButtonVariant,
  Type: ButtonType,
  Size: ButtonSize,
})

export const AppLink = Object.assign(_Link, {
  Variant: ButtonVariant,
  Type: ButtonType,
  Size: ButtonSize,
})
