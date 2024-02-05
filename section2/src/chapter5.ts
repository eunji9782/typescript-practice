//enum 
//열거형 타입

enum Role {
    ADMIN =0, //0으로 할당하지 않아도 자동으로 0으로 할당됨 (또는 10으로 할당 시 다음 값은 11, 12.. 이렇게 1씩 늘어남)
    USER=1,
    GUEST=2
}

enum Language {
    korean = 'ko',
    english = 'en'
}

const user1 = {
    name : "가나다",
    role : Role.ADMIN,    // 0 관리자
    language : Language.korean
}

const user2 = {
    name : "라마바",
    role : Role.USER    // 1 일반유저
}

const user3 = {
    name : "사아자",
    role : Role.GUEST    // 2 게스트
}