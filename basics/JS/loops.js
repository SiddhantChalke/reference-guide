function writeTable(){
    // .value property returns a string, so convert it into number
    var num = Number(document.getElementById('num1').value); 
    var i = 1;
    do{
        document.getElementById('p1').innerHTML += `${num} x ${i} = ${num*i} <br>`
        i++;
    }while(i<=10)

}

function revNum(){
    var num = document.getElementById('num2').value;
    var rev = 0;
    while(num!=0){
        var rem = num % 10;
        rev = (rev*10)+rem;
        num = parseInt(num / 10);
    }
    document.getElementById('p2').innerHTML = `${rev}`;
}

function noOfDigs(){
    var inp = document.getElementById('n5').value;
    var cnt=0;
    while(inp!=0){
        inp = Math.floor(inp/10);
        ++cnt;
    }
    // log10 based answer => log10(Number)+1
    // alert( Math.floor(Math.log10(inp) + 1) );
    alert(`No of Digits: ${cnt}`);
}

function divBy(){
    var num = Number(document.getElementById('num3').value);
    for(var i = num; i>=1 ; i--){
        if(i % 5==0){
            document.getElementById('p3').innerHTML += `${i} <br>`;
        }
    }
}

// var arr = ["oya","sumi","pun","pun "];
// arr.forEach((i)=> console.log(i));

// armstrong no: abcd... = a^n + b^n + c^n + d^n + ...

function armFor(){
    var num = Number(document.getElementById('n1').value);
    var sum = 0;
    while(num>0){
        var lastDig = num%10;
        sum += lastDig**3;
        num /= 10;
    }
    if(sum === num){
        alert(`${num} is Armstrong`);
    }else{
        alert(`${num} is Not armstrong`);
    }
}

function sumN(){
    var num = Number(document.getElementById('n2').value);
    var sum=0; var i =0;
    while(num>0 && i<=num){
        sum+=i;
        i++;
    }
    alert(` Sum of ${num} Natural Nos. is ${sum}`);
}
function fiboNacci(){
    var num = Number(document.getElementById('n3').value);
    var f1=1;var f2=1;var f=0;var i=1;
    do{
        i++;
        document.getElementById('p3').innerHTML+=`${f} `;
        f1=f2;
        f2=f;
        f=f1+f2;
    }while(i<=num);
}

function divByEle(){
    var num = Number(document.getElementById('num4').value);
    for(var i = num; i>=1 ; i--){
        if(i % 11==0){
            document.getElementById('p5').innerHTML += `${i} <br>`;
        }
    }
}

function ascend(){
    var arr = [5,4,3,6,9,1,0];
    // for(var i = 0; i<arr.length-1 ; i++){
    //     for(var j=i+1; j<arr.length; j++){
    //         if(arr[i] < arr[j]){
    //             var temp=arr[j];
    //             arr[j]=arr[i];
    //             arr[i]=temp;
    //         }
    //     }
    // }
    document.getElementById('p4').innerHTML = `${arr.sort((a,b)=> a-b)}`;
}
function descend(){
    var arr = [5,4,3,6,9,1,0];
    document.getElementById('p4').innerHTML = `${arr.sort((a,b)=> b-a)}`;
}

function palind(){
    let str = document.getElementById('n4').value.toLowerCase();
    
// using built-in methods
    var reverseStr = str.split('').reverse().join(''); 
    if(reverseStr === str){
        alert('Palindrome');
    }else{
        alert('Not palindrome')
    }

// using for loop
    // for (var i = 0; i < str.length/2; i++) {
    //     if (str[i] !== str[str.length - 1 - i]) { // As long as the characters from each part match, the FOR loop will go on
    //         alert('Not palindrome'); // When the characters don't match anymore, false is returned and we exit the FOR loop
    //     }
    //     alert('Palindrome');
    // }

}