const win = typeof window !== `undefined` ? window : {}

export const localStorage = win.localStorage
export const sessionStorage = win.sessionStorage
