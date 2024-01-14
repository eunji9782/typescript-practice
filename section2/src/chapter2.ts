//배열
let numArr:number[] = [1,2,3];

let strArr:string[] = ["a", "b", "c"];

let boolArr:Array<boolean> = [true, false, true];

let multiArr:(string | number)[] = [1, "hello"];

//다차원 배열
let doubleArr:number[][] = [
    [1,2,3],
    [4,5,6]
]

//튜플 (길이와 타입이 고정된 배열)
let tup1:[number, number] = [1,2];
let tup2: [number, string, boolean] = [1, "2", true];

const users:[string, number][] = [
    ["가나다", 1],
    ["가나다", 2],
    ["가나다", 3],
   // [4, "가나다"], 오류


]