import getType from './getType';

describe('基础测试',()=>{
    it('测试number',()=>{
        expect(getType(1)).toBe('Number')
    })
})