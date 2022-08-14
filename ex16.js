//es5에서도 객체개념있었음
// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }

// Person.prototype.printProfile=function(){
//     console.log("이름은 "+this.name+"이고 나이는 "+this.age+"세입니다");
// }

//es6의 class로 만들어보세영
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    printProfile=()=>{
        console.log("이름은"+this.name+"이고 나이는 " +this.age+"세입니다");
    }
    }


let p1=new Person("이영자",34);
p1.printProfile();

//prototype 에 등록이 되었는지 확인
console.log("printProfile" in p1._proto_);
console.log("printProfile" in Person.prototype);