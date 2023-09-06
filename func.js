function person(name,age,msg,greet)
{
    this.name = name,
    this.age = age,
    this.msg = msg,
    this.greet = function (){
        return msg;
    }
}

const person1 = new person("sai",24,"hi");
console.log(person1.name,person1.age,person1.greet())

const person2 = new person("chandu",26,"hello");
console.log(person2.name,person2.age,person2.greet())