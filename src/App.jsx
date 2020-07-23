import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import {connect} from 'react-redux'
import routes from './routes'

class App extends React.Component {

  render() {
    return (
      <Switch>
        {
          routes.map((route, key) => (
            <Route
              key={key}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))
        }
      </Switch>
    );
  }
}
const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(App)
