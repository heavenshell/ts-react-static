import React from 'react'
import { Root, Routes } from 'react-static'
import { Switch, Route } from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress'

import 'prismjs/themes/prism-okaidia.css'

const App = () => {
  return (
    <Root>
      <React.Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route render={() => <Routes />} />
        </Switch>
      </React.Suspense>
    </Root>
  )
}

export default App
