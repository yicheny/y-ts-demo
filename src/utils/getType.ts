export default function getType(value:any) {
    return Object.prototype.toString.call(value).slice(8,-1);
}
