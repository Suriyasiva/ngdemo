const marvelHeroPower = {
  name: "thor",
  native: "oscard",
  power: "storm",
  rightArmPower: 20,
  leftArmPower: 20,
  totalPower: function () {
    return this.rightArmPower + this.leftArmPower;
  },
};

const dcHeroPower = {
  name: "batman",
  native: "gowthamCity",
  power: "money",
  rightArmPower: 8,
  leftArmPower: 8,
};

//call method
console.log(
  "call method -->",
  marvelHeroPower.totalPower.call(
    dcHeroPower,
    dcHeroPower.leftArmPower,
    dcHeroPower.rightArmPower
  )
);

//apply method
console.log(
  "apply method -->",
  marvelHeroPower.totalPower.apply(
    dcHeroPower,
    new Array(dcHeroPower.leftArmPower, dcHeroPower.rightArmPower)
  )
);

// bind method
const getHeroPower = marvelHeroPower.totalPower.bind(
  dcHeroPower,
  dcHeroPower.leftArmPower,
  dcHeroPower.rightArmPower
);

console.log("bind method -->", getHeroPower());
