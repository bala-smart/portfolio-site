import React from 'react';
import {Helmet} from 'react-helmet'
export default class Introduction extends React.Component{
    constructor(props){        
        super(props);        
        this.state = {
        }
    }

    render(){
        return(
            <div className="content">
                <div id="introduction">
                    <h3 className="font-wg-bold">Introduction to Java Native Interface:</h3>
                    <p className="mar-le-40">Java Native Interface is function interface that will call Native code from JVM. Using JNI, We can call methods of c,c++, assembly language.</p>
                    <p className="mar-le-40">We are not able to accomplish some functionality like communicating with Windows OS from Java alone. So JNI is introduced.</p>
                    <div class="text-center">
                        <img src="/images/jni.jpg" class="img-fluid" alt="JNI Introduction"></img>
                    </div>
                </div>
           </div>
        )
    };
}