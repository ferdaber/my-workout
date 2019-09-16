type Overwrite<T, U> = Omit<T, keyof U> & U

type NativeHTML<
  K extends keyof JSX.IntrinsicElements,
  U extends keyof JSX.IntrinsicElements[K] = ''
> = Omit<
  Overwrite<JSX.IntrinsicElements[K], { ref: Exclude<JSX.IntrinsicElements[K]['ref'], string> }>,
  U
>

type RefOf<C> = (C extends import('react').JSXElementConstructor<{ ref?: infer R }>
  ? R
  : C extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[C]['ref']
  : unknown) extends import('react').Ref<infer T> | string | undefined
  ? import('react').Ref<T>
  : import('react').Ref<unknown>
