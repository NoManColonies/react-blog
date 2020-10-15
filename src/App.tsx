import React, { Suspense, ReactElement } from 'react'
import withHelmet from './utils/withHelmet'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './components/GlobalStyle'
import routes from './config/routes'
import NavBar from './components/NavBar'

function App(): ReactElement {
  return (
    <>
      <GlobalStyle />
      <Router>
        <NavBar />
        <Suspense fallback='...loading'>
          <Switch>
            {Object.keys(routes).map((routeKey: string) => (
              <Route key={routeKey} {...routes[routeKey]} />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default withHelmet('Geng | Blog App')(App)
