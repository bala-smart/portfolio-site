import React from 'react';
import {Helmet} from 'react-helmet'
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";
export default class ContactUs extends React.Component{
    constructor(props){        
        super(props);        
        this.state = {
            username:"",
            password:"",            
            message:"",
            code:"package com.jni.example",
            language:"java"
        }
    }

    render(){
        return(
            <div className="content center">   
                <Helmet>
                    <title>Bala Development | Contact Me</title>
                    <meta name="description" content="This is about the Balakumar S and his projects" />
                </Helmet>                        
                <p>Mobile      : 9943947430</p>
                <p>Whatsapp    : <a href="https://wa.me/919943947430">here</a></p>
                <p>Email       : <a href = "mailto: sbalakumarece@gmail.com">Send Email</a></p>
                <p>Linkedin       : <a href = "https://www.linkedin.com/in/balakumar-s-12567310b/">here</a></p>
                <CopyBlock 
                    text={this.state.code}
                    language={this.state.language}
                    showLineNumbers={true}
                    theme={dracula}
                />                
           </div>
        )
    };
}