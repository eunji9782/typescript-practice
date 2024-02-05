//any
// 특정 변수의 타입을 확실히 모를 때 

let anyVar = 10;
//anyVar = "hello"; //오류

let anyVar2 : any = 10;
// anyVar2 = "hello";

// anyVar2 = true;
// anyVar2 = {};
// anyVar2 = ()=> {};

// anyVar2.toUpperCase();
// anyVar2.toFixed();

// let num : number = 10;
// num = anyVar2;


//unknown
let unknownVar : unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = ()=> {};

let num1 : number = 10;
//num1 = unknownVar; //오류. any와는 달리 타입 정제를 해줘야만 들어갈 수 있음

if(typeof unknownVar === "number"){
    num1 = unknownVar
}