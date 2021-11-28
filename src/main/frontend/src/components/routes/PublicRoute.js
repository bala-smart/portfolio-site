import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeNavbar from '../home/HomeNavbar';
const PublicRoute = ({component: Component, restricted, isAuthenticated, ...rest}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            isAuthenticated && restricted ?
                <Redirect to="/" />
            :                
            <div>
                <HomeNavbar />                
                <Component {...props} />
            </div>
        )} />
    );
};
let mapStateToProps = (state) => {    
    return{
        isAuthenticated : state.auth.authenticated        
    };
};
export default connect(mapStateToProps,undefined)(PublicRoute);