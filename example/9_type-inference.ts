// 타입 추론 기본 1
var a = 'abc';

function getB(b = 10) {
  var c = 'hi';
  return b + c;
}

getB(10); // '10hi'

var a = 'a';

function logA(a = 'a') {
  var b = 10;
  return b;
}

// 타입 추론 기본 2
interface Dropdown<T> {
  value: T
  title: string;
}
var items: Dropdown<number> = {
  value: 10,
  title: 'a'
}

var shoppingItem: Dropdown<string> = {
  value: 'abc', // 추론
  title: 'hello',
};

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T
  title: string;
}
interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

var detailedItem1: DetailedDropdown<string> = {
  title: '타이틀1',
  description: 'desc',
  value: '값',
  tag: '태그',
}

var detailedItem2: DetailedDropdown<number> = {
  title: '타이틀2',
  description: 'desc',
  value: 12,
  tag: 4534,
}

// Best Common Type
var arr = [1, 2, 3];


























