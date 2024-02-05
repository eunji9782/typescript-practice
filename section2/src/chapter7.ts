//void : 반환값 없음

function func1() : void{
    console.log("Hi");
}

let a : void;
// a=1; //오류
// a="hello";//오류
a= undefined; //가능

//undefined나 null 타입이 있는데 void 를 쓰는 이유
//undefined, null은 return 을 해줘야하기 때문

// never : 모순, 불가능
function func2() : never {
    while (true) {} //정상적으로 끝날 수 없는 구문
}

function func3() : never {
    throw new Error(); //에러를 뱉는 구문
}

let b : never;
// b=1; //오류
// b="hello";//오류
// b= undefined; //오류