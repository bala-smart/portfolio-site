const authReducerDefaultState = {};
export default(state=authReducerDefaultState,action) => {    
    switch(action.type){
        case 'LOGIN':            
            return {
                ...state,
                authenticated:action.isAuthenticated
            }            
        case 'LOGOUT':{            
            return {}; 
        }       
        default:{
            return state;
        }
    }
}