import React from 'react';
export default class Spring extends React.Component{
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