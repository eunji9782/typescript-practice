/**
 * Unknown : 최상단 (전체집합)
 */

function unknownExam() {
    let a : unknown = 1;
    let b : unknown = "hello";
    let c : unknown = true;
    let d : unknown = null;
    let e : unknown = undefined;
    let f : unknown = new Array;

    // let num : number = a; //오류 : 다운캐스팅은 안됨
}

/**
 * Never : 최하단 (공집합)
 */

function neverExam() {
    function neverFunc() : never {
        while(true){}
    }

    let num : number = neverFunc();
    let str : string = neverFunc();
    let bool : boolean = neverFunc(); //업캐스팅으로 허용
}


/**
 * void : undefined의 슈퍼타입
 * 
 */

function voidExam() {
    function voidFunc() : void {
        console.log("hi");
        
    }

    let voidVar : void = undefined; //업캐스팅

}

/**
 * any : 모든 타입의 슈퍼타입
 */

function anyExam() {
    let unknownVar : unknown;
    let anyVar : any;
    let undefinedVar : undefined;
    let neverVar : never;

    anyVar = unknownVar; //unknown보다 아래에 있지만 가능하다...?
    undefinedVar = anyVar; //이것도 다운캐스팅인데 가능함
    //neverVar = anyVar; //유일하게 never만 안됨, never는 공집합이기 때문
}


//any는 치트키다 하지만 웬만해선 사용하지 않는게 좋다




