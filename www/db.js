class Docto {
  constructor(name, age, patients) {
    this.name = name;
    this.age = age;
    this.p = patients
  }
  getPatients() {
    return this.p
  }
}

class Patiant {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var p1 = new Patiant("a", 1)
var p2 = new Patiant("b", 1)
var p3 = new Patiant("c", 1)
var p4 = new Patiant("d", 1)

var d = new Docto("doctor", 45, [p1, p2, p3, p4])

console.log(d)

