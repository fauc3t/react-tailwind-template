import React from 'react';
import './App.css';
import './tailwind/tailwind.css'

import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';

function App() {
  return (
    <div className="bg-yellow-200 p-5 font-sans">
        <Switch>
          <Route exact path="/" render={props => <div>main</div> } />  
          <Route exact path="/signin" render={props => <div>sign in</div> } />
          <Route exact path="/signup" render={props => <div>sign up</div> } />
          <Route exact path="/signup" render={props => <div>sign up</div> } />
          <Route render={props => <div>404</div> } />
        </Switch>
    </div>
  );
}

export default withRouter(props => <App {...props} />);
