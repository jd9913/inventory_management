let requestData=obj=>{
    return new Promise((resolve, reject)=>{
        let xhr=new XMLHttpRequest();
        xhr.open(obj.method || "GET", obj.url);
        if(obj.headers){
        Object.keys(obj.headers).forEach(key=>{
            xhr.setRequestHeader(key,obj.headers[key]);
            });
        }
        xhr.onload=()=>{
            if(xhr.status===200 && xhr.readState===4){
            resolve(xhr.responseText);
            }else{
            reject(xhr.statusText);
            }
        };
        xhr.onerror=()=>reject(xhr.statusText);
        xhr.send(obj.body);
    
    });
}

