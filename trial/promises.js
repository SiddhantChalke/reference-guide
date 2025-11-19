var arr = [1,2,3,4,5];

function newProm(){
    let P1 = new Promise((res,rej)=>{
        if(arr.length > 0){
            res( eval( arr.join('+') ) );
        }else{
            rej('No data found: Empty array');
        }
    })
    return P1;
}
// newProm().then(data=>{
//     console.log(data);
// }).catch(err=> console.error(err))

function multiProm(){
    let P1 = new Promise((res,rej)=>{
        if(arr.length > 0){
            res( eval( arr.join('+') ) );
        }else{
            rej('No data found: Empty array');
        }
    })

    let P2 = new Promise((res,rej)=>{
        setTimeout(()=>{
            res('Resolved in 3 seconds !!');
        },3000);
    })
    return Promise.all([P1, P2]);
}
multiProm().then(data=>{
    console.log(data);
}).catch(err=> console.error(err))