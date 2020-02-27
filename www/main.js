//let fruits = ['banana', 'grapes', 'berry'];
//let a = fruits.indexOf('grapes');
//document.body.innerHTML += a;

let age = +prompt('how old are you?');
document.body.innerHTML += 'next year you will be', + (age++);



class Doctor {

  // The constructor method
  // runs when someone writes new Person
  constructor(name, age, patients) {
    // We create the properties name and age
    // and give them values from our arguments
    this.name = name;
    this.age = age;
    this.p = patients
  }
  getPatients() {
    return this.p
  }
}

let doc1 = new Doctor("moona", 23, ["Amir", "ifrA", "OTHER"])
console.log(doc1)

myObject = JSON.stringify(doc1)

console.log(myObject)

var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');

console.log(obj instanceof Doctor)



