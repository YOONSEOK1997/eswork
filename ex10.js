//number 객체
let a=12;
let b=23.0;
let c=12.6;
console.log(a+"는 정수인가?"+Number.isInteger(a));
console.log(b+"는 정수인가?"+Number.isInteger(b));
console.log(c+"는 정수인가?"+Number.isInteger(c));

let a1="Nan";
let b1=NaN;
let c1="안녕";
let d1=12;
//es5의 isNan : 숫자가 아닌경우 모두 true
console.log(a1+"은 Nan인가?"+isNaN(a1)); //t
console.log(b1+"은 Nan인가?"+isNaN(b1)); //t
console.log(c1+"은 Nan인가?"+isNaN(c1)); //t
console.log(d1+"은 Nan인가?"+isNaN(d1)); //f      //숫자가 아닌건 다 true (not a number)

//es6의 isNaN: 정말 NaN인경우에만 true
console.log("es6 isNan");
console.log(a1+"은 Nan인가?"+Number.isNaN(a1));
console.log(b1+"은 Nan인가?"+Number.isNaN(b1));
console.log(c1+"은 Nan인가?"+Number.isNaN(c1));
console.log(d1+"은 Nan인가?"+Number.isNaN(d1));

console.log("반복함수 repeat");
console.log('아졸려'.repeat(100)); //반복

var x="20";
var y="3";
console.log(x+y);
console.log(Number(x)+Number(y));