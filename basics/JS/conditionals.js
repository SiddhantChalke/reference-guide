function calCircle() {
    const radius = document.getElementById("radius").value;

    const areaC = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;

    alert(`Area: ${areaC} Circumference: ${circumference}`)
}

function calTriangle() {
    const base = document.getElementById("base").value;
    const height = document.getElementById("height").value;

    const areaT = 1 / 2 * base * height;

    alert(`Area of Triangle: ${areaT}`);
}

function abbrConvert() {
    const fullName = document.getElementById("fullName").value;

    const nameParts = fullName.split(" ");

    let abbreviation = "";

    if (nameParts.length >= 1) {
        abbreviation += nameParts[0][0].toUpperCase() + ".";
    }
    if (nameParts.length >= 2) {
        abbreviation += nameParts[1][0].toUpperCase() + ".";
    }
    if (nameParts.length >= 3) {
        abbreviation += nameParts[2][0].toUpperCase() + ".";
    }

    document.getElementById("abbr").innerHTML = `${abbreviation}`;
}

function simpleInterest() {
    const amount = document.getElementById("amount").value;
    const rate = document.getElementById("rate").value;
    const time = document.getElementById("time").value;
    const interest = (amount * rate * time) / 100;

    alert(`Simple Interest: ${interest}`);
}

function calGrossSalary() {
    const salary = parseFloat(document.getElementById("salary").value);

    const allowances = parseFloat(document.getElementById("allowances").value);

    const grossSalary = (salary + allowances);

    document.getElementById("grossSalary").innerHTML = `${grossSalary}`;
}

function calPercentage() {
    const sub1 = parseFloat(document.getElementById("sub1").value);

    const sub2 = parseFloat(document.getElementById("sub2").value);

    const sub3 = parseFloat(document.getElementById("sub3").value);

    const sub4 = parseFloat(document.getElementById("sub4").value);

    const sub5 = parseFloat(document.getElementById("sub5").value);

    const totalMarks = sub1 + sub2 + sub3 + sub4 + sub5;
    const totalSubs = 5;
    const percentage = (totalMarks / (totalSubs * 100)) * 100;

    document.getElementById("percentage").innerHTML = `${percentage}`
}

// 8. Write a program to display the sizes of different data types.

function calCheckNum() {
    const chknum = document.getElementById("chknum").value;

    if (chknum > 0) {
        document.getElementById("result").innerHTML = "Positive";
    } else if (chknum < 0) {
        document.getElementById("result").innerHTML = "Negative";
    } else {
        document.getElementById("result").innerHTML = "Zero";
    }
}

function checkVowel() {
    var char = document.getElementById("char").value;

    switch (char.toUpperCase()) {
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
            document.getElementById("p3").innerHTML = "Vowel";
            break;

        case "":
            document.getElementById("p3").innerHTML = "Please Enter valid character (A-Z)...";
            break;


        default:
            document.getElementById("p3").innerHTML = "Consonant";

    }
}

function calFactiorial() {
    const factNum = document.getElementById("factnum").value;
    const factorialResult = factorial(factNum);

    if (factorialResult < 0) {
        document.getElementById("factorial").innerHTML = `Invalid Input`;
    } else {
        document.getElementById("factorial").innerHTML = `${factorialResult}`;
    }
}
function factorial(n) {
    if (n < 0) {
        return -1; // Invalid input
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calPow() {
    const pownum = parseInt(document.getElementById("pownum").value);

    const pow1 = Math.pow(pownum, 1);
    const pow2 = Math.pow(pownum, 2);
    const pow3 = Math.pow(pownum, 3);

    document.getElementById("powers").innerHTML += `${pow1} <br>`
    document.getElementById("powers").innerHTML += `${pow2} <br>`
    document.getElementById("powers").innerHTML += `${pow3} <br>`
}

function calcSwitch() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            document.getElementById("calcresult").innerHTML = "Invalid operator";
            return;
    }

    document.getElementById("calcresult").innerHTML = `Result: ${result}`;
}

function checkEligity(){
    var age = document.getElementById('inpt').value;
    // validation
    if(age<0 || age>100){
        alert('what are you!');
        return;
    }
    if(age>=18){
        alert('you are aligible ');
    }else{
        alert('You are not eligible ');
    }
}

function checkSyll(){
    var char = document.getElementById('syll').value;
    switch(char){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            document.getElementById('ans').innerHTML = "Vowel";
            break;
        case '':
            document.getElementById('ans').innerHTML = "Invalid Input";
            break;
        default:
            document.getElementById('ans').innerHTML = "Consonant";
    }
}
function remVowels(){
    var str = document.getElementById(26).value;
    alert(str.replace(/[aeiou]/gi,''));
}

// function calc(){
//     var str = document.getElementById(24).value;
//     // var ans = document.getElementById('calcButt').innerHTML;
//     var a = str[0]; var b = str[1]; var op = str[2];
//     switch(op){
//         case '+': alert(a+b);
//         case '-': alert(a-b);
//         case '*': alert(a*b);
//         case '/': 
//         alert(a/b);
//             break;
//         default: 'Invalid';
//     }
// }
function greater(){
    var a = document.getElementById('16a').value; 
    var b = document.getElementById('16b').value; 
    if(a>b){
        alert(`${a} is the greater`);
    }else{
        alert(`${b} is the greater`);
    }
}
function evenOdd(){
    var a = document.getElementById('17').value;
    if(a%2===0){
        alert('Even');
    }else{
        alert('Odd');
    }
}
function isVowel(){
    var str = document.getElementById('19').value;
    if(str.includes('a'||'e'||'i'||'o'||'u'||'A'||'E'||'I'||'O'||'U' )){
        alert("Vowel !")
    }else{
        alert('Not Vowel !')
    }
}
function checkDate(){
    var input = document.getElementById('20').value;
    var date = new Date();
    var curr = date.getFullYear()+'-0'+(date.getMonth()+1) +'-'+date.getDate();
    if(input==curr){
        alert('Correct Date');
    }else{
        alert('Incorrect Date');
    }
}
function largest(){
    var a = document.getElementById('21a').value; 
    var b = document.getElementById('21b').value; 
    var c = document.getElementById('21c').value;
    if(a>b){
        if(a>c) alert(`${a} is largest`);
        else alert(`${c} is largest`);
    }else{
        alert(`${b} is largest`);
    }
}
function toFarhen(){
    var temp = document.getElementById(22).value;
    temp*=9;
    temp/=5;
    temp+=32;
    alert(`${temp} degree Farhenheit`);
}
function toCelsi(){
    var temp = document.getElementById(22).value;
    temp-=32;
    temp*=5;
    temp/=9;
    alert(`${temp} degree Celsius`);
}
function weekDay(){
    var ip = document.getElementById(23).value;
    switch(ip){
        case '1': alert('Monday');
        case '2': alert('Tuesday');
        case '3': alert('Wednesday');
        case '4': alert('Thursday');
        case '5': alert('Friday');
        case '6': alert('Satday');
        case '7':alert('Sunday');break;
    }
}