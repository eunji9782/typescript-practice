/**
 *  대수 타입 : 여러개의 타입을 합성한 것
 * 
 */

//1. 합집합 - union
let a : string | number | boolean;
a = 'aaa';
a = 123;
a = true;

type Dog = {
    name : string,
    color : string,
};

type Person = {
    name : string,
    language : string,
};

type Union = Dog | Person;

let union1 : Union = { //가능 : Dog | Person 중 하나여도 된다
    name : "",
    color : ""
}

let union2 : Union = { //가능
    name : "",
    language : ""
}

let union3 : Union = { //가능 : 둘다여도 된다
    name : "",
    color : "",
    language : ""
}

// let union4 : Union = { //오류 : Dog는 name, color / Person은 name, language를 가져야 하는데 어느곳도 해당되지 않음
//     name : ""
// }


// 2. 교집합 - Intersection 

let val : string & number; //String이면서 number여야 함 >> 사실상 never 타입

type Dog1 = {
    name : string,
    color : string,
};

type Person1 = {
    name : string,
    language : string,
};

type Inter = Dog1 & Person1;

// let inter1 : Inter = { //오류 : Dog만 해당
//     name : "",
//     color : "",
// }

// let inter2 : Inter = { //오류 : Person만 해당
//     name : "",
//     language : "",
// }


let inter3 : Inter = { //가능 : 둘다 해당되는 경우
    name : "",
    color : "",
    language : ""
}
