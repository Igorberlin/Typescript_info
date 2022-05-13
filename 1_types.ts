
//Для сборки из ts в js пишем в командной строке tsc 1_types.ts(название фала который хотим скомилировать)
//затем чтобы вывести в командной строке значение пишем  node 1_types.js
//=======================================
const str: string = 'Hello'

const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string ="Hello typescript"

const numberArray:number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2:Array<number>=[1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello']

//Tuple
const contact: [string, number] = ['Igor', 12345435]

//Any

let variable:any = 42
variable = 'string'
variable = []

//=======================
function sayMyName(name: string):void {
    console.log(name);
}
sayMyName('Igor')

//Never

function throwError(message: string):never{
            throw new Error(message)
}

function infinite():never {
    while (true) {
    }
}
//Type

type Login = string

const login: Login = 'admin'

type ID=string | number

const id1: ID = 1234
const id2: ID = '1234'
//const id3: ID = true    not work

type SomeType = string | null | undefined


