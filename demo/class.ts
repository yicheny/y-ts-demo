abstract class Animal{
    abstract run():void;
}

class Dog extends Animal{
    run(){};
}

let xx: Dog;
xx = new Dog();
