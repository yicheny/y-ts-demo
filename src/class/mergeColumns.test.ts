import _ from 'lodash';
import mergeColumns from './_MergeColumns';

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
        expect(mergeColumns('header', source).pick(['h2', 'h3']).data)
            .toEqual([{ header: 'h2', bind: 'b2' }, { header: 'h3', bind: 'b3' }]);

        expect(mergeColumns('header', source).pick(['h3', 'h1']).data)
            .toEqual([{ header: 'h3', bind: 'b3' }, { header: 'h1', bind: 'b1', width: 100 }]);

        expect(mergeColumns('bind', source).pick(['b1']).data)
            .toEqual([{ header: 'h1', bind: 'b1', width: 100 }]);
    });
})