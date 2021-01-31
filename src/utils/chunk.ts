export default function chunk(array: Array<any>, size: number=1) {
    if(array.length === 0) return [];
    if(array.length <= size) return [array];
    const result = [];
    let index = 0;
    while(index < array.length){
        result.push(array.slice(index,index+size));
        index+=size;
    }
    return result;
}