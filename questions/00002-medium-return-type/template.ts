type MyReturnType<F> = F extends (...args: infer _) => infer R
  ? R
  : never
