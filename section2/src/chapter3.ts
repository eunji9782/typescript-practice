//객체
// let user:object = {
//     id : 1,
//     name : "가나다"
// };

//user.id; 오류

let user: {
    id?:number, //?를 붙이면 선택적 프로퍼티가 됨
    name: string
} = {
    id: 1,
    name: "가나다"
};

user.id; 

user = {
    name : "홍길동"
}

let config : {
    readonly apikey: string; //readonly를 붙이면 수정할 수 없는 프로퍼티가 됨
}= {
    apikey : "MY API KEY"
};

//config.apikey="hacked"; //오류