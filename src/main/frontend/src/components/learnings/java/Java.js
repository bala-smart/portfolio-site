import React from 'react';
export default class Java extends React.Component{
    constructor(props){        
        super(props);        
        this.state = {
            username:"",
            password:"",            
            message:""
        }
    }

    render(){
        return(
            <div className="content center">
                <p>Coming soon</p>
           </div>
        )
    };
}