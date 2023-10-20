/*

- `this` return empty {} object in constructor

   ----declare constructor function ------

        constructor(name, section) {
        this.name = name;
        this.section = section;
        }
              --or--

        constructor(name, section) {
         this["name"] = name;
         this["section"] = section;   
        }
                 
    - inside the class every function is method


    extends -- get the data from parent 

    super -- assign data for parent by child




*/

class Student {
  name = "suriya s";
  constructor(name, section) {
    this["name"] = name;
    this["section"] = section;
  }

  printName() {
    // method
    console.log(`i'm ${this.name}`);
  }
}

// const student = new Student('name','c');
// new Student('name','c').printName();
// student.printName()

class Heros {
  constructor(heroName, leftHandPower, rightHandPower) {
    this["heroName"] = heroName;
    this["lhPower"] = leftHandPower;
    this["rhPower"] = rightHandPower;
  }

  calculatePower() {
    return this.lhPower * this.rhPower;
  }
}

class MarvelHero extends Heros {
  rpmPower = 150;
  constructor(heroName, leftHandPower, rightHandPower) {
    super(heroName, leftHandPower, rightHandPower);
    // super.calculatePower(); // this will call when convertHeroPowerToRPM is called
    this["heroName"] = heroName;
    this["lhPower"] = leftHandPower;
    this["rhPower"] = rightHandPower;
  }

  powerWhenAngry() {
    console.log(
      `- when ${this.heroName} gets angry the power for him is ${
        this.calculatePower() * 100
      }`
    );
  }

  powerOfHero() {
    console.log(`- ${this.heroName} power is ${this.lhPower * this.rhPower}`);
  }

  convertHeroPowerToRPM() {
    console.log(
      `- Total ${this.heroName} RPM power is ${
        this.lhPower * this.rhPower * this.rpmPower
      }`
    );
  }
}

const marvelHeroData = new MarvelHero("Thor", 95, 95);
marvelHeroData.convertHeroPowerToRPM();
marvelHeroData.powerOfHero();
marvelHeroData.powerWhenAngry();

class DCHero extends Heros {
  rpmPower = 150;
  constructor(heroName, leftHandPower, rightHandPower) {
    super(heroName, leftHandPower, rightHandPower);
    // super.calculatePower(); // this will call when convertHeroPowerToRPM is called
    this["heroName"] = heroName;
    this["lhPower"] = leftHandPower;
    this["rhPower"] = rightHandPower;
  }

  powerWhenAngry() {
    console.log(
      `- when ${this.heroName} gets angry the power for him is ${
        this.calculatePower() * 100
      }`
    );
  }

  powerOfHero() {
    console.log(`- ${this.heroName} power is ${this.lhPower * this.rhPower}`);
  }

  convertHeroPowerToRPM() {
    console.log(
      `- Total ${this.heroName} RPM power is ${
        this.lhPower * this.rhPower * this.rpmPower
      }`
    );
  }
}

const dcHeroData = new MarvelHero("Bat Man", 95, 95);
dcHeroData.convertHeroPowerToRPM();
dcHeroData.powerOfHero();
dcHeroData.powerWhenAngry();
