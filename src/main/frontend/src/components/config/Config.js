import React from 'react';
import {AAjax} from '../utils/MakeAjax';
export default class Config extends React.Component{
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
            <div className="content">                           
                <p>This is first1</p>
           </div>
        )
    };
}