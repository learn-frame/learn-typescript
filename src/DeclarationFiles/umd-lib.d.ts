declare namespace umdModule {
  const version: string
  function doSomething(): void
}

export as namespace umdLib

export = umdLib
