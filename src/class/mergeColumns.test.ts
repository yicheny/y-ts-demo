import mergeColumns from './mergeColumns';

function createSource() {
    return [
        { header: 'h1', bind: 'b1', width: 100 },
        { header: 'h2', bind: 'b2' },
        { header: 'h3', bind: 'b3' },
    ]
}

const source = createSource();

describe('mergeColumns基础测试', function () {
    it('选取 pick', function () {
        expect(mergeColumns('header', source).pick().data).toEqual([]);
        expect(mergeColumns('header', source).pick(source.map(x => x['header'])).data).toEqual(source);

        expect(mergeColumns('header', source).pick(['h2', 'h3']).data)
            .toEqual([{ header: 'h2', bind: 'b2' }, { header: 'h3', bind: 'b3' }]);

        expect(mergeColumns('header', source).pick(['h3', 'h1']).data)
            .toEqual([{ header: 'h3', bind: 'b3' }, { header: 'h1', bind: 'b1', width: 100 }]);

        expect(mergeColumns('bind', source).pick(['b1']).data)
            .toEqual([{ header: 'h1', bind: 'b1', width: 100 }]);
    });

    it('忽略 omit', function () {
        expect(mergeColumns('header', source).omit(['h1']).data)
            .toEqual([{ header: 'h2', bind: 'b2' }, { header: 'h3', bind: 'b3' }]);

        expect(mergeColumns('bind', source).omit(['b2', 'b3']).data)
            .toEqual([{ header: 'h1', bind: 'b1', width: 100 }]);

        expect(mergeColumns('header', source).omit().data).toEqual(source);
        expect(mergeColumns('header', source).omit([]).data).toEqual(source);
        expect(mergeColumns('header', source).omit(source.map(x => x['header'])).data).toEqual([]);
    })

    it('更新 update',function (){
        expect(mergeColumns('header',source).update([{_key:'h1',width:300}]).data)
            .toEqual( [ { header: 'h1', bind: 'b1', width: 300 },
                { header: 'h2', bind: 'b2' },
                { header: 'h3', bind: 'b3' } ]);

        expect(mergeColumns('header',source).update([{_key:'h1',width:undefined}]).data)
            .toEqual( [ { header: 'h1', bind: 'b1', width: undefined },
                { header: 'h2', bind: 'b2' },
                { header: 'h3', bind: 'b3' } ]);

        expect(mergeColumns('header',source).update([{_key:'h3',width:88}]).data)
            .toEqual( [ { header: 'h1', bind: 'b1', width: 100 },
                { header: 'h2', bind: 'b2' },
                { header: 'h3', bind: 'b3', width: 88 } ]);
    })
})
