export const STAGE = `${process.env.STAGE}`

export const PROD = STAGE === 'prod'
export const STAGING = STAGE === 'staging'
export const DEV = STAGE === 'dev'

// export const API_URL = `${process.env.API_URL}`
export const API_URL = 'https://reqres.in/api/'
