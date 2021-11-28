import React from 'react';
import {AAjax} from '../utils/MakeAjax';
export default class PersonelProjects extends React.Component{
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
                    <h1>Personel Projects</h1>                    
                </div>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col">
                            <h5 className="hori-center">#1</h5>
                            <p className="font-bold">Billing System for Chirpkart</p>
                            <p>Chirpkart</p>                                                        
                            <span>Coimbatore, India</span>
                            <hr />
                            <div className="bg-lightgray borader-radius pd-1">
                                <ul>
                                    <li>                                    
                                        <p>One of my friend doing birds selling business, He need billing software for his business but not able to spend amount for software at that time of earlier stage of his business</p>                                                             
                                    </li>
                                    <li>                                    
                                        <p>So i have developed billing software for him and hosted in heroku</p>                                                             
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <h5 className="hori-center">#2</h5>
                            <p className="font-bold">Endpoint Privilege Manager</p>
                            <p>Balakumar</p>                                                        
                            <span>Coimbatore, India</span>
                            <hr />
                            <div className="bg-lightgray borader-radius pd-1">
                                <ul>
                                    <li>                                    
                                        <p>Ransomware like attack happen through only from end user workstation with local admin privilege</p>                                                             
                                    </li>
                                    <li>                                    
                                        <p>By implementing my solution, End user will run as normal user, if user required admin privilege. User can request admin privilege to admin/Manager then based on policy admin approve/deny the request</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>                    
                </div>
                </div>
 
           </div>
        )
    };
}