// function onSubmitForm(){
    
    
// }
// Name check
function nameCheck(){
    var fname = document.getElementById('fullName').value;
    var name = fname.indexOf(' ') >= 0; 
    var nameArr = fname.split(" ");
    if(name && (nameArr[0].length<4 || nameArr[1].length<4)){
        document.getElementById('invalName').style.display = 'block';
        return false;
    }else{
        document.getElementById('invalName').style.display = 'none';
    }
}
// Email check
function emailCheck(){
    var emailId = document.getElementById('eId').value;
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if(emailId.length>0 && emailRegex.test(emailId)){
        document.getElementById('invalEmail').style.display = 'none';
        return true;
    }else{
        document.getElementById('invalEmail').style.display = 'block';
        return false;
    }
}

// PAN number check
function isPanId(inp){
    // break the input into 3 pieces pureAlphabets-pureNumber-pureAlphabet
    var inp0 = inp.substring(0, 5);
    var inp5 = inp.substring(5,9)
    var inp9 = inp.substring(9);
    var pureNum = !/([A-Za-z]+)/.test(inp5);
    var pureAlpha = !/([0-9]+)/g.test(inp0 && inp9);
    // if all 3 pieces are valid...return true
    if(pureAlpha && pureNum){
        return true;
    }else{
        return false;
    }
}
function panCheck(){
    var inp = document.getElementById('panId').value;
    // a regex w only alphabets and numbers
    const panRegex = /([A-Za-z0-9])\w+/g;

    // if input has valid length, matches pattern and is valid PAN ID, return true
    if(inp.length==10 && panRegex.test(inp) && isPanId(inp)){
        document.getElementById('invalPan').style.display = 'none';
        return true;
    }else{
        document.getElementById('invalPan').style.display = 'block';
        return false;
    }
}

// amount to words convertion
function num2word(inp){
    // console.log(inp +'before convn');
    
    
    
    // console.log(inp +'after conv')
    var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90,100,1000,100000,10000000];
    var words = ['','one','two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen','twenty','thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety','hundred','thousand','lakh','crore'];

    var map = new Map();
    // entries in map nums=>words 
    for(var x=0; x<=nums.length-1; x++){
        map.set(nums[x],words[x]);
    }
    // if(inp.toString().length >2){
    //     return map.get( hunds+'hundred ' +tens+'ty ' + inp);
    // }else if(inp.toString().length >1){
        
    //     return map.get( tens+'ty' );
    if(inp.toString().length>2){
        var hunds = Math.floor(inp/100);
        var tens = Math.floor(inp/10)*10;
        var units = inp-tens;
        return map.get( hunds+ 'hundred and ' +tens +units );
    
    }else if(inp.toString().length >1){
        var tens = Math.floor(inp/10)*10;
        var units = inp-tens;
        return map.get( tens + units ); 
    }
    else{
        return map.get( inp );
    }
    
}
function amtCheck(){
    var amt = document.getElementById('loan-amt').value;
    var croreArr = new Array();
    var lakhsArr = new Array();
    var thousArr = new Array();
    var hundsArr = new Array();
    
    
    if(amt.length>7){
        for(var i=amt.length-1; i>=amt.length-3;i--){

            hundsArr[i] = num2word(amt.charAt(i));
        }
        for(var j=amt.length-4; j>=amt.length-5;j--){
            thousArr[j] = amt.charAt(j);
        }
        for(var k=amt.length-6; k>=amt.length-7;k--){
            lakhsArr[k] = amt.charAt(k);
        }
        for(var l=amt.length-8; l>=amt.length-9;l--){
            croreArr[l] = amt.charAt(l);
        }
    }else if(amt.length>5){
        for(var i=amt.length-1; i>=amt.length-3;i--){

            hundsArr[i] = num2word(amt.charAt(i));
        }
        for(var j=amt.length-4; j>=amt.length-5;j--){
            thousArr[j] = amt.charAt(j);
        }
        for(var k=amt.length-6; k>=amt.length-7;k--){
            lakhsArr[k] = amt.charAt(k);
        }
    }else if(amt.length>3){
        for(var i=amt.length-1; i>=amt.length-3;i--){

            hundsArr[i] = num2word(amt.charAt(i));
        }
        for(var j=amt.length-4; j>=amt.length-5;j--){
            thousArr[j] = amt.charAt(j);
        }
    }else if(amt.length<=3){
        // for(var i=amt.length-1; i>=amt.length-3;i--){
            var temp = amt;
            hundsArr[0] = num2word(temp%1000);
            hundsArr[1] = num2word(temp%100);
            hundsArr[2] = num2word(temp%10);
        // }
    }
    console.log(hundsArr);
    // console.log(hundsArr[0]+' hundred '+hundsArr[1]+'ty'+hundsArr[2]);
    // console.log(thousArr+'thousand');
    // console.log(lakhsArr+'lakh')
    // console.log(croreArr+'crore');

    
    
}


// get captcha
function getRandom(){return Math.ceil(Math.random()* 20);}
var randomNo1 = getRandom(), randomNo2 = getRandom();

function createSum(){
    document.getElementById('capt').innerHTML = `${randomNo1} + ${randomNo2}`;
    return (randomNo1 + randomNo2);
}
// console.log(createSum());
function captCheck(){
    var inpCapt = document.getElementById('inp-capt').value;
    var cnt = 3;var prev=0;
    if(inpCapt == createSum()){
        document.getElementById('invalCapt').innerHTML = 'Passed !';
        document.getElementById('invalCapt').style.display = 'block';
        document.getElementById('invalCapt').style.color = 'blue';
        return true;
    }else{
        prev++;
        document.getElementById('invalCapt').innerHTML = `Failed ${cnt-=prev} attempts left !`;
        document.getElementById('invalCapt').style.display = 'block';
        document.getElementById('invalCapt').style.color = 'red';
    }
}