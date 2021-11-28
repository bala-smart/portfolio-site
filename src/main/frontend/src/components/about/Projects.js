import React from 'react';
export default class Projects extends React.Component{
    constructor(props){        
        super(props);        
        this.state = {

        }
    }

    render(){
        return(
            <div>                           
                <br></br>                
                <div className="bg-light">
                <div className="hori-center">
                    <h1>Projects</h1>                    
                </div>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col">
                            <h5 className="hori-center">#1</h5>
                            <p className="font-bold">LDAP Over SSL</p>
                            <p>ManageEngine</p>                                                        
                            <span>Chennai, India</span>
                            <hr />
                            <div className="bg-lightgray borader-radius pd-1">
                                <ul>
                                    <li>                                    
                                        <p>By default Client to Server communication is unencrypted, So by using network monitoring tools hacker can get username & password as plaintext.</p>                                                             
                                    </li>
                                    <li>                                    
                                        <p>Some applications authenticate with Active Directory, So i have implemented LDAP Over SSL Communication to encrypt the session</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <h5 className="hori-center">#2</h5>
                            <p className="font-bold">Azure AD Auditing</p>
                            <p>ManageEngine</p>                                                        
                            <span>Chennai, India</span>
                            <hr />
                            <div className="bg-lightgray borader-radius pd-1">
                                <ul>
                                    <li>                                    
                                        <p>IT administrator want to know how the IT environment is doing. So i have implemented solution to auditing of your Azure environment.</p>                                                             
                                    </li>
                                    <li>                                    
                                        <p>IT administartor will get alert when un-authrorized user did some activities like Role Addition,User deletion in environment, Also IT Admin can run some alert script to avoid lateral movement</p>
                                    </li>
                                </ul>
                            </div>
                        </div>                        
                        <div className="col">
                            <h5 className="hori-center">#3</h5>
                            <p className="font-bold">Agent Component</p>
                            <p>ManageEngine</p>                                                        
                            <span>Chennai, India</span>
                            <hr />
                            <div className="bg-lightgray borader-radius pd-1">
                                <ul>
                                    <li>                                    
                                        <p>Every IT administrator or Manager need report of users activity like Working hours, Idle time, File Activity, etc</p>                                                             
                                    </li>
                                    <li>                                    
                                        <p>So i have developed Simple agent component which is installed on end user workstation and collects information about logon activity, file activity, etc. The collected data will be forwarded to server on real-time. Then from server IT admin know the user activity of an user on entire day.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>                        
                    </div>
                    <br></br>
                    <div className="row align-items-start">
                        <div className="col">
                            <h5 className="hori-center">#4</h5>
                            <p className="font-bold">User Activity Monitoring</p>
                            <p>ManageEngine</p>                                                        
                            <span>Chennai, India</span>
                            <hr />
                            <div className="bg-lightgray borader-radius pd-1">
                                <ul>
                                    <li>                                    
                                        <p>Every IT administrator or Manager need report of users activity, So our Agent component takes screenshots from end user workstation on every x seconds, Then it will be forwarded to target server based on admin configuration</p>
                                    </li>
                                    <li>                                    
                                        <p>From target server IT admin can know the end user daily activity like website used, application usage, etc</p>                                                             
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <h5 className="hori-center">#5</h5>
                            <p className="font-bold">Threat Detection</p>
                            <p>ManageEngine</p>                                                        
                            <span>Chennai, India</span>
                            <hr />
                            <div className="bg-lightgray borader-radius pd-1">
                                <ul>
                                    <li>                                    
                                        <p>IT administrator want to know how the IT environment is doing. So i have implemented solution to detect and response to threat in Active Directory.</p>                                                             
                                    </li>
                                    <li>                                    
                                        <p>If user trying to Bruteforce, PasswordSpary, Randsomware attack, This will be notified to IT admin. Then IT Admin can run some script to the threat (Shutdown computer, Delete user from AD, etc). </p>                                                             
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