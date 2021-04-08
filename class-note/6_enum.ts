enum Shoes2 {
  Nike = 11,
  Adidas = 3,
  Adidas2 = 3,
  Adidas3 = 1,
  NewBalance,
  NewBalance2,
  NewBalance23,
}
var myShoes2 = Shoes2.Nike;
console.log(myShoes2); // 0


enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스'
}

var myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'

// 예제

function askQuestion(answer: string) {
  if (answer === 'yes') {
    console.log('정답입니다.');
  }
  if (answer === 'no') {
    console.log('오답입니다.');
  }
}

askQuestion('yes'); // OK
askQuestion('예스');
askQuestion('Y');
askQuestion('Yes');

// ----------------------------

enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion2(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다');
  }
  if (answer === Answer.No) {
    console.log('오답입니다');
  }
}
askQuestion2(Answer.Yes);
