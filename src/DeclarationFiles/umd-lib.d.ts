declare namespace umdModule {
  const version: string
  function doSomething(): void
}

// @ts-ignore
export as namespace umdLib

// @ts-ignore
export = umdLib
