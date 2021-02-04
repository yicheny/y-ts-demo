const a:string = '1';
const b:number = 1;
const c:boolean = false;
const d:void = undefined;//null或undefined
const e:null = null;
const f:undefined = undefined;
const g:any = 1;//任意值
const h:object = {age:111};

const list:number[] = [1,2,3];
const list2:Array<number> = [1,2,3];

const x:[string,number] = ['hello',1];//true

function error():never{
    throw new Error('error')
}

let ra:ReadonlyArray<number> = [1,2,3];
