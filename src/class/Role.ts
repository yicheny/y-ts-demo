interface IRoleOption {
    name:string,
    age?:number,
    atk:number,
    def:number,
    hp:number,
    buff?:string
    sex:'男'|'女'
}

class Role{
    _name:string;
    _age?:number;
    _atk:number;
    _def:number;
    _hp:number;
    _buff?:string;
    _sex:'男'|'女';

    constructor(options:IRoleOption) {
        this._name = options.name;
        this._age = options.age;
        this._atk = options.atk;
        this._def = options.def;
        this._hp = options.hp;
        this._buff = options.buff;
        this._sex = options.sex;
    }
}

class AngelRole extends Role{
    attack(enemyDef:number){
        return this._atk - enemyDef;
    }

    guard(enemyAtk:number){
        const harm = enemyAtk - this._def;
        return harm<0 ? 0 : harm;
    }
}

// const angel = new AngelRole({name:'angel',age:1000,atk:100,def:60,hp:500,sex:'女'});
// console.log(angel.attack(10));
