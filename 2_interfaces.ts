interface Rect {
    readonly id: string
    color?: string    //?- не обязательное значение 
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height:30
    },
    color:'#ccc'
    
}
const rect2: Rect = {
    id: '12345',
    size: {
        width: 10,
        height:5
    }, 
}
rect2.color = 'black' // не смотря на то что это константа и она содержит объект или массив, мы можем изменять данные, ! НО не можем присвоить что либо другое 

const rect3 = {} as Rect
const rect4 = <Rect>{}

//===========================Наследование интерфейса

interface RectWithArea extends Rect{
    getArea:()=>number
}
const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 10,
        height:20
    },
    getArea(): number{
        return this.size.width* this.size.height
    }
}

//=============

interface IClock{
    time: Date
    setTime(date:Date):void
}
class Clock implements IClock{
    time: Date = new Date()
    setTime(date: Date): void {
        this.time=date
    }
}
//=============
interface Styles{
    [key:string]:string
    // border: string,
    // marginTop: string,
    // borderRadius:string
}

const  CSSS:Styles = {
    border: '1ps solid black',
    marginTop: '2px',
    borderRadius:'5px'
}