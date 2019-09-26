class Circle {
    constructor(radius){
        this.radius = radius;
        this.pi = Math.PI
    }

    get diameter(){
        return (this.radius * 2);
    }

    set diameter(newDiameter){
        return this.radius = (newDiameter / 2);
    }

    get circumference(){
        return this.pi * this.diameter
    }

    set circumference(newCircumference){
        return this.radius = (newCircumference / this.pi) / 2 
    }

    get area(){
        return (this.radius * this.radius) * this.pi
    }

}