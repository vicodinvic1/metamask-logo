import { atom } from 'recoil'

export const toolbarHeight = atom({
  key: 'toolbarHeight',
  default: 0
})

export const toolbarShadow = atom({
  key: 'toolbarShadow',
  default: false
})

export const toolbarShadowBreakpoint = atom({
  key: 'toolbarShadowBreakpoint',
  default: null
})

export const providerHandlers = atom({
  key: 'providerHandlers',
  default: {}
})
