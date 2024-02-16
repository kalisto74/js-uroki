'use sctrict';

//alert('Hello');

//const result = confirm('Are you here?');

//const answer = prompt('Вам есть 18?', '18');

//const answer = +prompt('Вам есть 18?', '18');


//console.log(typeof(answer));
//console.log(answer + 5);

const answers = [];
//answers[0] = prompt('Как ваше имя?', '');
//answers[1] = prompt('Как ваша фамилия?', '');
//answers[2] = prompt('Сколько вам лет?', '');

//document.write(answers);

console.log(typeof(answers));


const arr = [1, 2, 3];

const arrObj = {
  a: 'a',
  '1': 'b',
  2: 'c',
  abc: {
    df: [{}, {}],
    def: {

    }

  }
};
arr[10] = '3456';
console.log(arr);
console.log(arr[1]);
console.log(arrObj[1]);

//arrObj.b = '1234';
const b = 'b'; 
arrObj['b']= '1234';

console.log(arrObj['b']);
console.log(arrObj.b);

const obj = {
  Anna: 500,
  'Alice': 800
};
console.log(obj.Anna);