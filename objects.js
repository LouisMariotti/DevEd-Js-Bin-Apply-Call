// Functions are special objects
// Access to 3 special methodes BIN CALL APPLY

const person = {
  firstName: "Louis",
  lastName: "Mariotti",
  getName() {
    console.log(this.firstName + this.lastName);
  },
};

function registerUser(country, lang) {
  // Aditional functionalities
  this.getName();
  console.log(` My country is ${country} and my language is ${lang}`);
}

// const register = registerUser.bind(person);
// register("France", "French");

// Bin allows to call a method on a function

/* Call different, when use call you are not saving it into a variable,
you're invoking it */

// registerUser.call(person, "france", "french");

// Apply

registerUser.apply(person, ["France", "French"]);

// Can use these three, do the same things
