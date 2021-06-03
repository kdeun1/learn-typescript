// 인터페이스
interface Developer {
  name: string;
  skill: string;
}
// interface Person {
//   name: string;
// }

class Person {
  name: string;
}

var developer: Developer;
var person: Person;
// developer = person; // ERROR
person = developer; // OK


// 함수
let add2 = function(a: number) {
  // ...
}

let sum2 = function(a: number, b: number) {
  // ...
}

// add2 = sum2; // ERROR
sum2 = add2; // OK


// 제네릭
// 제네릭
interface Empty<T> {
  // ...
}
var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2; // OK
empty2 = empty1; // OK

interface NotEmpty<T> {
  data: T;
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;

notEmpty1 = notEmpty2; // ERROR
notEmpty2 = notEmpty1; // ERROR
