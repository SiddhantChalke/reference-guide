var otp = null;
function genOtp(){

    var rNum = Math.floor(Math.random()*10000);

    if (rNum.toString().length < 4) {
        if (rNum.toString().length == 3) {
            rNum += "0";
        }
        if (rNum.toString().length == 2) {
            rNum += "00";
        }
    }
    console.log(rNum +' randomly generated');
    otp = rNum;
}

function checkOtp(){
    var inpOtp = Number(document.getElementById('otpInp').value);
    // console.log(inpOtp+' inpOtp');
    // console.log(otp +' otp');
    if(inpOtp == otp){
        // window.location.href = 'https://pixel6.co/'; 
        return true;
    }else{
        // window.location.href = 'https://pixel6.co/404/';
        return false;
    }
}

function redirect(){
    var cnt = 3;
    if(checkOtp()){
        document.getElementById('form-id').innerHTML = `<h1>Validation Successful !!!</h1>`
        setTimeout(() => {
            location.assign('https://pixel6.co/');
        }, 1000); 
    }
    else{
        while(cnt>1){
            cnt=cnt-1;
            alert(`Incorrect OTP ! You have ${cnt} more attempts`);
            if(cnt<0){
                // location.assign('https://pixel6.co/404/');
                console.log('count finished')
            }
        }
    }
    // if(cnt<=0){
    //     location.assign('https://pixel6.co/404/');
    // }
    while(cnt>0){
        cnt=cnt-1;
        alert(`Incorrect OTP ! You have ${cnt} more attempts`);
        // if(cnt<=1){
        //     location.assign('https://pixel6.co/404/');
        // }
    }
    
    // else{
    //     document.getElementById('form-id').innerHTML = `<h1>Validation Successful !!!</h1>`
    //     setTimeout(() => {
    //         location.assign('https://pixel6.co/');
    //     }, 2000);
    // }
}
// console.log(link)