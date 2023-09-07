const student = {
  firstName: 'Monica',
  isStudent: true,

  get nameAndstate() {
    return `my name is ${this.firstName} and it is ${this.isStudent} im a student`;
  },
  
  set changeName(newName) {
      this.firstName = newName;
  },
  set changeproperty(newpropert){
      this.isStudent = newpropert;
  },
};
console.log(student.nameAndstate);
console.log(student.firstName); // Monica
console.log(student.isStudent); // true
// change(set) object property using a setter
student.changeName = 'sarah';
student.changeproperty = false;
console.log(student.nameAndstate);
console.log(student.firstName); // Sarah
console.log(student.isStudent); // false