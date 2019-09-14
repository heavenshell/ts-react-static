// Origina icon is from https://github.com/mui-org/material-ui/blob/fad1a78deed7cbf712b42bb5931b35fb2bcdbca4/docs/src/modules/components/Twitter.js
import * as React from 'react'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'

const TwitterIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M7.6 21.63c8.95 0 13.84-7.4 13.84-13.84v-.63c.94-.7 1.76-1.55 2.4-2.52-.86.38-1.8.64-2.78.76 1-.6 1.78-1.54 2.14-2.68-.94.56-1.98.96-3.1 1.18-.88-.94-2.14-1.53-3.54-1.53-2.7 0-4.86 2.17-4.86 4.86 0 .38.04.75.12 1.1C7.78 8.14 4.2 6.2 1.8 3.27c-.42.72-.66 1.55-.66 2.44 0 1.7.86 3.18 2.16 4.05-.8-.02-1.55-.24-2.2-.6v.05c0 2.36 1.67 4.33 3.9 4.77-.4.1-.84.17-1.28.17-.32 0-.62-.03-.92-.08.62 1.93 2.42 3.33 4.55 3.37-1.67 1.3-3.76 2.1-6.04 2.1-.4 0-.77-.04-1.15-.08 2.15 1.38 4.7 2.18 7.45 2.18" />
    </SvgIcon>
  )
}

export default TwitterIcon
