interface Bird {
    fly():void;
    layEggs():void;
}

interface Fish {
    swim():void;
    layEggs():void;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

const pet = {
    swim(){},
    layEggs(){},
    fly(){}
};
if (isFish(pet)) pet.swim();
