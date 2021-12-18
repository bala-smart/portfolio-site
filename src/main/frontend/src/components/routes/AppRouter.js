import React, { Component } from 'react';
import { BrowserRouter,Router,HashRouter, Switch,Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
//import {createBrowserHistory} from 'history';
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();
import { connect } from 'react-redux';
import  {login} from '../redux/actions/auth';
import Home from '../home/Home';
import Config from '../config/Config';
import AboutMe from '../about/AboutMe';

import NotFoundPage from '../NotFoundPage';
import ContactUs from '../contact/ContactUs';
import JNI from '../learnings/java/jni/JNI';
import Spring from '../learnings/java/spring/Spring';
import Java from '../learnings/java/Java';
class AppRouter extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" restricted={false} component={AboutMe} exact />
                <PublicRoute path="/home" restricted={false} component={Home} exact />
                <PublicRoute path="/config" restricted={false} component={Config} exact />
                <PublicRoute path="/about" restricted={false} component={AboutMe} exact />
                <PublicRoute path="/contact" restricted={false} component={ContactUs} exact />
                <PublicRoute path="/jni" restricted={false} component={JNI} exact />
                <PublicRoute path="/spring" restricted={false} component={Spring} exact />
                <PublicRoute path="/java" restricted={false} component={Java} exact />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
      </Router>
    );
  }
}
let mapStateToProps = (state) => {    
  return{
      isAuthenticated : state.auth.authenticated,            
  };
};
export default connect(mapStateToProps,{login})(AppRouter);