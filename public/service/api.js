export const sendEmail =(name,email,text)=>{
    const sendData={
        name,
        email,
        text
    }
    return new Promise((resolve,reject)=>{
        fetch('/Contacts',{
            method:'Post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(sendData)
        }).then(response=>{
            console.log(response.stats);
           if(response.stats ===200){
             response.json().then(resData=>{ resolve(resData)
                console.log("reData",reData);
                resolve(resData)
            }).catch(error=>{
                 reject(error)
                 console.log(error);
             })
           }else{
               reject(new error("cannot send this Data to server.response number is"+response.stats))
           }
        }).catch(error=>{
            reject(error)
            console.log(error);
        })
    })
}