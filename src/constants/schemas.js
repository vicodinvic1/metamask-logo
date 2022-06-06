import * as yup from 'yup'

import * as regex from 'constants/regex'

// USER

export const USER_PROFILE_SCHEMA = yup.object({
  fullName: yup.string()
    .label('Full name')
    .matches(regex.FULL_NAME, { message: 'Only letters allowed' }),
  email: yup.string()
    .label('Email')
    .email()
})
