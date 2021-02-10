type Point = [number,number];

class Square {
    public topLeft ?: Point;
    public side:number = 100;
}

class Rectangle{
    public topLeft ?: Point;
    public width:number = 100;
    public height:number = 20;
}

class Circle{
    public center ?: Point;
    public radius:number = 100;
}

class Geometry{
    public PI:number = 3.1415926;

    public area(shape:object):number | never{
        if(shape instanceof Square){
            return shape.side * shape.side;
        }
        if(shape instanceof Rectangle){
            return shape.width * shape.height;
        }
        if(shape instanceof Circle){
            return this.PI * shape.radius * shape.radius;
        }
        throw new Error("没有这种形状！")
    }
}

console.log('Square',new Geometry().area(new Square()));
console.log('Rectangle',new Geometry().area(new Rectangle()));
console.log('Circle',new Geometry().area(new Circle()));

export {}
