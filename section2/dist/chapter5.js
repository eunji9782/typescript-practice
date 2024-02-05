//enum 
//열거형 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user1 = {
    name: "가나다",
    role: Role.ADMIN // 0 관리자
};
const user2 = {
    name: "라마바",
    role: Role.USER // 1 일반유저
};
const user3 = {
    name: "사아자",
    role: Role.GUEST // 2 게스트
};
export {};
