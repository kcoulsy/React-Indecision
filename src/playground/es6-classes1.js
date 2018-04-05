class Person {
  constructor(name = 'Default Name', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    return `Hi ${this.name}!`;
  }
  getDescription(){
    return `Hi ${this.name}, you are ${this.age}!`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if(this.hasMajor()) {
      description += ` Major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, home) {
    super(name, age);
    this.home = home;
  }
  getGreeting(){
    let desc = super.getGreeting();
    if(this.home){
      desc += ` I'm from ${this.home}`;
    }
    return desc;
  }
}
const me = new Student('Kristian Coulson', 22, 'CS');

console.log(me.getDescription());

const other = new Student();
console.log(other.hasMajor());

const guy = new Traveler('Dave', 21, 'Haslifd');
console.log(guy.getGreeting());
