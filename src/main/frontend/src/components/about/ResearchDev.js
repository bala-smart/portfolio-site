import React from 'react';
export default class ResearchDev extends React.Component{
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
                    <h1>Research & Development</h1>                    
                </div>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col">
                            <h5 className="hori-center">#1</h5>
                            <p className="font-bold">Lucene Implementation</p>
                            <p>ManageEngine</p>                                                        
                            <span>Chennai, India</span>
                            <hr />
                            <div className="bg-lightgray borader-radius pd-1">
                                <ul>
                                    <li>                                    
                                        <p>In larger environment there are lots of DB hitting calls produces performance degradation of entire product</p>
                                    </li>
                                    <li>                                    
                                        <p>To increase performance i have introduced Lucene (Text based search) by implmenting this performance increased 4x faster than DB hitting</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <h5 className="hori-center">#2</h5>
                            <p className="font-bold">EHCache Implementation</p>
                            <p>ManageEngine</p>                                                        
                            <span>Chennai, India</span>
                            <hr />
                            <div className="bg-lightgray borader-radius pd-1">
                                <ul>
                                    <li>                                    
                                        <p>There are multiple unused data occupies memory in product, These can be cleared to improve performance and memory usage of product</p>                                                             
                                    </li>
                                    <li>                                    
                                        <p>I have introduce EHCache to kept alive only valid data in memory after the specific period those unused data will be removed from memory, So there won't be any memory issue in product</p>
                                    </li>
                                </ul>
                            </div>
                        </div>                        
                        <div className="col">
                            <h5 className="hori-center">#3</h5>
                            <p className="font-bold">Bandwidth usage on Agent Component</p>
                            <p>ManageEngine</p>                                                        
                            <span>Chennai, India</span>
                            <hr />
                            <div className="bg-lightgray borader-radius pd-1">
                                <ul>
                                    <li>                                    
                                        <p>Due to work from home few users are working with slower internet connection</p>
                                    </li>
                                    <li>                                    
                                        <p>Implemented logic to to forward data from end machine with mimimalized bandwidth to avoid internet connectivity issue in end user machine</p>
                                    </li>
                                </ul>
                            </div>
                        </div>                        
                    </div>
                    <br></br>
                    <div className="row align-items-start">
                        <div className="col">
                            <h5 className="hori-center">#4</h5>
                            <p className="font-bold">Application Control</p>
                            <p>ManageEngine</p>                                                        
                            <span>Chennai, India</span>
                            <hr />
                            <div className="bg-lightgray borader-radius pd-1">
                                <ul>
                                    <li>                                    
                                        <p>To avoid Ransomware like attack, I have introduced application control mechanism in end user workstation</p>
                                    </li>
                                    <li>                                    
                                        <p>Before running any kind of application our product will check integrity, Author, etc information of process. If anything is vulnerable, Process will be blocked by our agent</p>
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