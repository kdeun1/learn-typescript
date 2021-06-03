interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return {
    name: 'Tony',
    age: 33,
    skill: 'Iron Masking',
  };
}
var tony = introduce();
// console.log(tony.skill); // ERROR

if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill); // OK
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age); // OK
}

// type guard
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  tony.skill
} else {
  tony.age
}
