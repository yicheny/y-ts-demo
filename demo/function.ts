function fun(x:number):number;
function fun(x:string):string;
function fun(x:any):any{//仅这里会进行有效检查
    if(typeof x === 'number') return 1;
    if(typeof x === 'string') return 'string';
}

export {}
