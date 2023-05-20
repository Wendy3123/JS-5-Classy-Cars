class Vehicle{
    constructor(model){
        this.model=model
    }
    drive(){
        return `${this.model} drives`
    }
}

class Sedan extends Vehicle{
    constructor(model,backupCamera){
        super(model)
        this.backupCamera = backupCamera
    }
}

class Suv extends Vehicle{
    constructor(model,offroadPackage){
        super(model)
        this.offroadPackage = offroadPackage
    }
}

class Truck extends Vehicle{
    constructor(model,towingCapacity){
        super(model)
        this.towingCapacity = towingCapacity
    }
}

class EVSedan extends Sedan{
    constructor(model,backupCamera){
        super(model,backupCamera)
    }
    drive(){
        return `${this.model} drives`
    }
    recharge(){
            return `${this.model} recharges`
    }
}

