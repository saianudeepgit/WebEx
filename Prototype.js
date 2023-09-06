function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  let person1 = new Person

  Person.prototype.nationality = "india";

  console.log(person1.nationality);