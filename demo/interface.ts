interface IData {
    readonly code:number;
    message:string,
    error?:string,
    [propName:string]:any,
}

function appendFooter(data:IData){

}


interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}

/*interface ClockInterface {
    currentTime: Date;
    setTime(d: Date):null;
}

class Clock implements ClockInterface {
    currentTime: Date;

    constructor(h: number, m: number) {
        this.currentTime = new Date();
    }

    setTime(d: Date): null {
        this.currentTime = d;
        return null;
    }
}*/

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick():void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
let digital = createClock(DigitalClock, 12, 17);

interface IAnimal{
    name:string
}
interface IDog extends IAnimal{
    run():void;
}
const dog:IDog = {
    name:'aaa',
    run:function(){}
}


class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}
