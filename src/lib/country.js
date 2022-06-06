import React from 'react'
import TruncateMarkup from 'react-truncate-markup'

import { COUNTRIES } from 'constants/countries'

export function getCountryNameByCode (code) {
  const match = COUNTRIES.find(c => c.alpha2Code === code)

  return match?.name || 'Unknown country'
}

export function renderCountryName (country, options) {
  const label = `${getCountryNameByCode(country)} (${country})`

  return (
    <TruncateMarkup lines={1} {...options}>
      <span title={label}>
        {label}
      </span>
    </TruncateMarkup>
  )
}
