import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function OpenFolderIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='26'
      height='26'
      viewBox='0 0 576 512'
      {...restProps}
    >
      <path
        fill={color}
        d='M527.95 224H480v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h385.057c28.068 0 54.135-14.733 68.599-38.84l67.453-112.464C588.24 264.812 565.285 224 527.95 224zM48 96h146.745l64 64H432c8.837 0 16 7.163 16 16v48H171.177c-28.068 0-54.135 14.733-68.599 38.84L32 380.47V112c0-8.837 7.163-16 16-16zm493.695 184.232l-67.479 112.464A47.997 47.997 0 01433.057 416H44.823l82.017-136.696A48 48 0 01168 256h359.975c12.437 0 20.119 13.568 13.72 24.232z'
      />
    </svg>
  )
}

export default withDefaultColor('primary.main')(OpenFolderIcon)
