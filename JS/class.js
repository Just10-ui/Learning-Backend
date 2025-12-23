//* Use the keyword class to create a class. Always add a method named constructor():
class ClassName {
  constructor() {
    //code to execute
  }
}

//example
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}


//* When you have a class, you can use the class to create objects:
//Example
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);