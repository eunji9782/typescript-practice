/**
 * 기본 타입간의 호환성
 *
 */

let num1:number = 10;
let num2:10 =10;
num1 = num2; //업캐스팅

/**
 * 객체 타입간의 호환성
 */

type Animal = {
    name : string,
    color : string
};

type Dog = {
    name : string,
    color : string,
    breed : string,
};

let animal : Animal = {
    name : "기린",
    color : "yellow"
}

let dog : Dog = {
    name : "돌돌이",
    color : "brown",
    breed : "진도"
}

animal = dog; //가능 : 업캐스팅
//구조적 타입 시스템이기 때문에 name, color 가 있는 객체는 animal로 본다
//따라서 dog에도 name, color 가 있어 animal로도 볼 수 있다

//dog = animal; //불가 : 다운캐스팅

type Book = {
    name :string,
    price : number
}

type ProgrammingBook = {
    name :string,
    price : number,
    skill : string
}

let book : Book;
let programmingBook : ProgrammingBook = {
    name :"타입스크립트",
    price : 33000,
    skill : "reactJS"
}

book = programmingBook; //가능
// programmingBook = book; //불가

let boo2 : Book = {
    name :"타입스크립트",
    price : 33000,
    // skill : "reactJS" //오류 : book = programmingBook; 이건 되는데 왜?
}

/**
 * 초과 프로퍼티 검사
 */

//업캐스팅을 하면 초과된 프로퍼티에 대한 검사를 하지 않지만 객체에 직접적으로 (리터럴)
//할당하면 이 검사를 수행하여 막는다