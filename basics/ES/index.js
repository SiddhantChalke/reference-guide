// variables
let x = 10 ;
// constants hv to be defined
const pi = 3.14 ;

// normal fns
function addn(a,b){
    return a+b;
}
// console.log(addn(3,5));

// rest parameters accepted in fns using spread operator
function subn(...nums){
    let ans = nums.reduce((prev,curr)=>{
        return prev-curr;
    })
    return ans;
}
// console.log(subn(9,2,3));

// default parameteres
function muln(a,b=5){
    return a*b;
}
// console.log(muln(2));

// OOPs
// class declaration
class Person{
    id;
    name;
    address;

    // method
    showDetails(){
        return `Person ${this.id} is ${this.name} from ${this.address}.`
    }
}
const friend = new Person();
friend.id = 1;
friend.name = 'Sajid';
friend.address = 'Raigad';
console.log(friend.showDetails());

// class expression = convert fn to class
function Employee(id,name){
    return ` ${id}st employee is ${name} `
}
const sid = new Employee(2,'Siddhant');