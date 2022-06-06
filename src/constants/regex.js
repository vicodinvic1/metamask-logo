export const FULL_NAME = /^([a-z]+)([a-z\s|\-{1,}])+([a-z])$/gi

export const PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/gi

export const URL = /^https?:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.\w+(:\d+)?(\/[\w-=.?]+)*\/?$/gi

export const NUMBERS_ONLY = /^[0-9]*$/g
