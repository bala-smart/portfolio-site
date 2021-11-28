import $ from "jquery";
let serverUrl = window.location.protocol + '//' + window.location.hostname+":"+window.location.port+'/';
let AAjax = (url,params) => {  
  return new Promise(function (resolve,reject) {
    $.ajax({      
      url: serverUrl+url,
        dataType: 'json',
        data: params,
        async: false,
        type : 'POST',
        success: function(json){
          resolve(json);          
        },
        error : function(error){            
          reject(error);
        }
      });
    });
}

let Ajax = (url,params) => {  
    return new Promise(function (resolve,reject) {
      $.ajax({        
        url: serverUrl+url,
          dataType: 'json',
          data: params,
          type : 'POST',
          success: function(json){            
            resolve(json);          
          },
          error : function(error){            
            reject(error);
          }
        });
      });
}

let ACTAjax = (url,params) => {
  return new Promise(function (resolve,reject) {
    $.ajax({      
      url: serverUrl+url,
        data: params,
        method: "POST",
        cache: false,
        contentType: false,
        processData: false,            
        success: function(json){
            resolve(json);          
        },
        error : function(error){            
          reject(error);
        }
      });
    });
}
export {Ajax,AAjax,ACTAjax};