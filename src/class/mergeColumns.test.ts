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

    it('插入 insert', function () {
        expect(mergeColumns('header',source).insert([{_beforeKey:'h1',header:'h0',bind:'b0'}]).data)
            .toEqual([ { header: 'h0', bind: 'b0' },
                { header: 'h1', bind: 'b1', width:100 },
                { header: 'h2', bind: 'b2' },
                { header: 'h3', bind: 'b3' } ]);

        expect(mergeColumns('header',source).insert([{_beforeKey:'h3',header:'h2.5',bind:'b2.5'}]).data)
            .toEqual([ { header: 'h1', bind: 'b1', width:100 },
                { header: 'h2', bind: 'b2' },
                { header: 'h2.5',bind:'b2.5'},
                { header: 'h3', bind: 'b3' } ]);

        expect(mergeColumns('header',source).insert([{_afterKey:'h3',header:'h4',bind:'b4'}]).data)
            .toEqual([ { header: 'h1', bind: 'b1', width:100 },
                { header: 'h2', bind: 'b2' },
                { header: 'h3', bind: 'b3' },
                { header: 'h4', bind: 'b4' } ]);
    });

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

    it('插入头部 head',function (){
        expect(mergeColumns('header', source).head({header:'h0',bind:'b0'}).data)
            .toEqual([{header:'h0',bind:'b0'}].concat(source))

        expect(mergeColumns('header', source).head([{header: 'h0', bind: 'b0'}]).data)
            .toEqual([{header:'h0',bind:'b0'}].concat(source))

        expect(mergeColumns('header', source).head([{header:'h-1',bind:'b-1'}, {header:'h0',bind:'b0'}]).data)
            .toEqual([{header:'h-1',bind:'b-1'}, {header:'h0',bind:'b0'}].concat(source))
    });

    it('插入尾部 tail',function (){
        expect(mergeColumns('header', source).tail({header:'h0',bind:'b0'}).data)
            .toEqual(source.concat([{header:'h0',bind:'b0'}]))

        expect(mergeColumns('header', source).tail([{header: 'h0', bind: 'b0'}]).data)
            .toEqual(source.concat([{header:'h0',bind:'b0'}]))

        expect(mergeColumns('header', source).tail([{header:'h-1',bind:'b-1'}, {header:'h0',bind:'b0'}]).data)
            .toEqual(source.concat([{header:'h-1',bind:'b-1'}, {header:'h0',bind:'b0'}]))
    });
})

describe('mergeColumns组合测试',function(){
    it('挑选、插入并更新 pick+insert+update',function(){
        expect(mergeColumns('header', source)
            .pick(['h1','h3'])
            .insert([
                {_beforeKey:'h1',header:'h0',bind:'h0'},
                {_afterKey:'h3',header:'h4',bind:'h4'}
            ])
            .update([
                {_key:'h0', width:88, bind:'h0-update'},
                {_key:'h1', width:123},
                {_key:'h4', bind:'h4-update'},
            ]).data)
            .toEqual([{header:'h0', width:88, bind:'h0-update'},
                {header: 'h1', bind: 'b1', width:123},
                {header: 'h3', bind: 'b3'},
                {header:'h4',bind:'h4-update'}]
            )
    });

    it('忽略、插入并更新 omit+insert+update',function(){
        expect(mergeColumns('header', source)
            .omit(['h2'])
            .insert([
                {_beforeKey:'h1',header:'h0',bind:'h0'},
                {_afterKey:'h3',header:'h4',bind:'h4'}
            ])
            .update([
                {_key:'h0', width:88, bind:'h0-update'},
                {_key:'h1', width:123},
                {_key:'h4', bind:'h4-update'},
            ]).data)
            .toEqual([{header:'h0', width:88, bind:'h0-update'},
                {header: 'h1', bind: 'b1', width:123},
                {header: 'h3', bind: 'b3'},
                {header:'h4',bind:'h4-update'}])
    });
})
