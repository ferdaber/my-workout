const classNames = new Set<string>()

export function registerCSSClass(className: string) {
  if (classNames.has(className))
    throw new Error(`CSS class ${className} has already been registered.`)
  classNames.add(className)
  return className
}
