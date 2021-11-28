import React from 'react';
export default class Education extends React.Component{
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
            <div>                           
                <br></br>                
                <div className="bg-light">
                <div className="hori-center">
                    <h1>Education</h1>                    
                </div>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col">
                            <h5>Engineering</h5>
                            <p>Electronics</p>
                            <p>2017</p>                            
                            <p className="font-bold">Karpagam College</p>
                            <span>Coimbatore, India</span>
                            <hr />
                            <div className="bg-lightgray borader-radius pd-1">
                                <p>Scored  : 89%</p>
                                <p>First class with distinction</p>                                
                            </div>
                        </div>
                        <div className="col">
                            <h5>High School</h5>
                            <p>12th grade</p>
                            <p>2013</p>                            
                            <p className="font-bold">Government Higher Secondary School</p>
                            <span>Trichy, India</span>
                            <hr />
                            <div className="bg-lightgray borader-radius pd-1">
                                <p>Scored : 88%</p>
                                <p>Rank   : #1</p>
                                <p>School Topper</p>
                            </div>
                        </div>                        
                        <div className="col">
                            <h5>Primary School</h5>                            
                            <p>Upto 10th grade</p>
                            <p>2011</p>                            
                            <p className="font-bold">Government High School</p>
                            <span>Trichy, India</span>
                            <hr />
                            <div className="bg-lightgray borader-radius pd-1">
                                <p>Scored : 92%</p>
                                <p>Rank   : #3</p>
                                <p>Learn  : Dicipline, Behaviours</p>
                            </div>
                        </div>                        
                    </div>
                </div>
                </div>
           </div>
        )
    };
}