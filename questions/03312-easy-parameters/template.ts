type MyParameters<T> =
  T extends (...args: infer Arg) => unknown
    ? Arg
    : never
