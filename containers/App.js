import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import {queryTest, addDisaster  } from '../util/serverQuery';
import AddDisaster from './AddDisaster';
import DisasterLists from './DisasterLists';
import MainLayout from './MainLayout';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          text:""
      }
  } 

  submit(){
     
  }

  render(){
    return(
        <Router history={browserHistory}>
            <Route component={MainLayout}>
                <Route path="/" component={DisasterLists}/>
                <Route path="/Add" component={AddDisaster}/>
            </Route>
        </Router>
        );
  }
}

export default App;