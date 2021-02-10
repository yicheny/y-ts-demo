type Point = [number,number];

class Square {
    private topLeft ?: Point;
    private side:number = 100;

    public area():number{
        return this.side * this.side;
    }
}

class Rectangle{
    private topLeft ?: Point;
    private width:number = 100;
    private height:number = 20;

    public area():number{
        return this.width * this.height;
    }
}

class Circle{
    private center ?: Point;
    private radius:number = 100;
    private PI:number = 3.1415926;

    public area():number{
        return this.PI * this.radius * this.radius
    }
}

console.log('Square',new Square().area());
console.log('Rectangle',new Rectangle().area());
console.log('Circle',new Circle().area());

export {}
