import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => {    

    let getClassName = () => {
        //vertical-scroll w100pc tab-content_wo-lefttree
        let className = "vertical-scroll w80pc tab-content";
        return className;
    }    

    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isAuthenticated ?
                <div>                    
                    <div className="flex-box-row ht400">
                        <div className={true ? "vertical-scroll w80pc tab-content" : "vertical-scroll w100pc tab-content_wo-lefttree"}>
                            <Component {...props} />                            
                        </div>
                    </div>
                </div>
            : <Redirect to="/login" />
        )} />
    );
};
let mapStateToProps = (state) => {
    return{
        isAuthenticated : state.auth.authenticated,
    };
};
export default connect(mapStateToProps,undefined)(PrivateRoute);