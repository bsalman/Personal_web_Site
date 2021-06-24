export const sendEmail =(name,email,text)=>{
    const sendData={
        name,
        email,
        text
    }
    return new Promise((resolve,reject)=>{
        fetch('/Contact',{
            method:'Post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(sendData)
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            } else {
                reject(new Error('can not send the data, response number is: ' + response.status))
            }
        }).catch(error=>{
            reject(error)
            console.log(error);
        })
    })
}
//creat fetch function to git all my infos for home page // 
export const allMyInfosPost =()=>{
    return new Promise((resolve,reject)=>{
        fetch ('/getAllMyInfos',{
            method:'POST',
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            if (response.status === 200 ){
                response.json().then(data => {
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            }else {
                reject(new Error('can not get the data, response number is: ' + response.status))
            }
        }).catch(error => {
            reject(error)
        })
    })
}