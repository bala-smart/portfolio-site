export const login = (authStatus) => {
    return {
        type:"LOGIN",
        isAuthenticated:authStatus
    }
};

export const startLogin = () => {    
    return{
        type:"LOGIN",
        aut : true
    }
};

export const logout = () => {
    return {
        type:"LOGOUT"
    }
};

export const startLogout = () => {
    return() => {
        return false;
    };
};

export const getLoginStatus = () =>{    
    return(dispatch,getState) => {
        console.log(getState.auth);
    };
}