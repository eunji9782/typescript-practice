//type User = {} //같은 스코프에선 중복으로 오류
let user = {
    id: 1,
    name: "가나다",
    nickname: "nick",
    birth: "1999.12.31",
    bio: "hi",
    location: "경기도"
};
let user2 = {
    id: 1,
    name: "가나다",
    nickname: "nick",
    birth: "1999.12.31",
    bio: "hi",
    location: "경기도"
};
let countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk"
};
export {};
// let countryNumberCodes : CountryNumberCodes = {
//     Korea : 410,
//     UnitedState : 840,
//     UnitedKingdom : 826
// }
// type CountryNumberCodes2 = {
//     [key : string] : number,
//     Korea : number //꼭 넣어야 하는 값이 있다면 추가로 써주면 된다
// }
//let countryNumberCodes2 : CountryNumberCodes2 = {} //빈 객체도 허용됨에 주의
// type CountryNumberCodes3 = {
//     [key : string] : number,
//     Korea : string //오류 : 추가적인 프로퍼티는 반드시 기존에 있는 value값의 타입과 호환되어야 한다
// }
