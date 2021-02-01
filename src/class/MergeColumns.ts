import _ from 'lodash';

interface IColumn {
    [key: string]: any
}

/*
author: ylf
* */
class MergeColumns{
    _key:string;
    _data:Array<object>

    constructor(key:string, source:Array<object>) {
        this._key = key;
        this._data = _.isArray(source) ? _.cloneDeep(source) : [];
    }

    static create(key:string, source:Array<object>){
        return new MergeColumns(key,source);
    }

    pick(keys?:Array<string>){
        this._data = _.reduce(keys,(acc:Array<object>,key)=>{
            const col:object | undefined = _.find(this._data,x=>{
                return (<IColumn>x)[this._key] === key;
            });
            col && acc.push(col);
            return acc;
        },[])
        return this;
    }

    // omit(values){
    //     this._data = _.filter(this._data,x=>!_.includes(values,x[this._key]));
    //     return this;
    // }

    // _insertKey(key,indexOffset,x){
    //     if(!_.isNil(x[key])) {
    //         const item = _.find(this._data,o=>o[this._key] === x[key]);
    //         if(!item) return null
    //         const insertIndex = _.indexOf(this._data,item) + indexOffset;
    //         return this._data.splice(insertIndex,0,_.omit(x,[key]));
    //     }
    // }

    // insert(data){
    //     _.forEach(data,x=>{
    //         this._insertKey('_beforeKey',0,x);
    //         this._insertKey('_afterKey',1,x);
    //     });
    //     return this;
    // }

    // update(data){
    //     const keys = _.map(data,x=>x._key);
    //     _.forEach(this._data,(x,i,ary)=>{
    //         if(!_.includes(keys,x[this._key])) return null;
    //         const item = _.find(data,o=>(o._key === x[this._key]));
    //         ary[i] = _.assign(x,_.omit(item,['_key']))
    //     })
    //     return this;
    // }

    // head(data){
    //     if(_.isPlainObject(data)) this._data.unshift(data);
    //     if(_.isArray(data)) this._data = _.concat(data,this._data);
    //     return this;
    // }

    // tail(data){
    //     if(_.isPlainObject(data)) this._data.push(data);
    //     if(_.isArray(data)) this._data = _.concat(this._data,data);
    //     return this;
    // }

    get data(){
        return this._data;
    }
}

const mergeColumns = MergeColumns.create;
module.exports = mergeColumns;