import getType from './getType';

describe('getType方法测试',()=>{
    it('检查number类型',()=>{
        expect(getType(1)).toBe('Number')
    })
})