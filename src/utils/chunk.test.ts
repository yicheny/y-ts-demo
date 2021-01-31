import {chunk} from './index';

describe('测试自定义chunk方法',()=>{
    it('测试默认size',()=>{
        expect(chunk([])).toEqual([]);
        expect(chunk(['a','b'])).toEqual([['a'],['b']]);
    })

    it('测试标准用法',()=>{
        expect(chunk(['a','b','c'],2)).toEqual([['a','b'],['c']]);
    })

    it('测试size超过数组长度',()=>{
        expect(chunk(['a'],2)).toEqual([['a']]);
        expect(chunk(['a','b'],3)).toEqual([['a','b']]);
    })
})