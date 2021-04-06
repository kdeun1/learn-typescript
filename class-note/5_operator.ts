function logMessage2(value: any) {
  console.log(value);
}
logMessage2('hello');
logMessage2(100);

var seho: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

// 인터섹션(교차) 타입
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name; // OK
  // someone.skill; // ERROR
  // someone.age; // ERROR
}

askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
askSomeone({ name: '캡틴', age: 100 });

var capt: string & number & boolean;

function askSomeone2(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}

// askSomeone2({ name: '디벨로퍼', skill: '웹 개발' }); // ERROR
// askSomeone2({ name: '캡틴', age: 100 }); // ERROR
askSomeone2({ name: '캡틴', skill: '웹 개발', age: 100 }); // OK
