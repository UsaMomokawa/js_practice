// 必要に応じてデータ型が自動変換される
console.log('37' - 7);
console.log('37' + 7);
console.log('1.1' + '1.1');
console.log(+'1.1' + +'1.1');

// 配列リテラル
var coffees = ['French Roast', 'Colombian', 'Kona'];
console.log(coffees);
var fish = ['Lion', , 'Angel'];
console.log(fish);
console.log(fish[1]);

//オブジェクトリテラル
var sales = 'Toyota';

function carTypes(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales }; //{}で囲まれた、プロパティ名と値のリストが、オブジェクトリテラル
console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);

var car = { manyCars: {a: 'Saab', b: 'Jeep'}, 7: 'Manda' };
console.log(car.manyCars.b);
console.log(car[7]);
console.log(car[5]); //undefined

var unusualPropertyNames = {
  '': 'An empty string', //プロパティ名は空白でもよい
  '!': 'Bang!'
}
console.log(unusualPropertyNames['']);
console.log(unusualPropertyNames['!']);

//拡張オブジェクトリテラル
var foo = {a: 'alpha', 2: 'two'};
console.log(foo.a);
console.log(foo[2]);
console.log(foo['a']);
console.log(foo['2']);

//正規表現リテラル
var re = /ab+c/;

//文字列リテラル
'foo'
"bar"
'1234'
'one line \n another line'
"John's cat"
console.log("John's cat".length);

//テンプレートリテラル(ES6~)
// `In JavaScript '\n' is a line-feed.`
// `In JavaScript template strings can run
// over multiple lines, but double and single
// quoted strings cannot.`

var name = 'Bob', time = 'today';
`Hello ${name}, how are you ${time}?` //文字列補完

//文字エスケープ
var quote = 'He read \"The Creamation of Sam McGee\" by R.W. Service.'; //引用符
console.log(quote);

var home = 'c:\\temp'; //バックスラッシュ

var str = 'this string \
is broken \
across multiple \
lines.'
console.log(str); //改行

//ブロック
var x = 1
while (x < 10){
  x++;
}
console.log(x);

//条件文
var condition = true
var statement_1 = 'ごきげん'
var statement_2 = 'がっかり'
if (condition) {
  console.log(statement_1);
} else {
  console.log(statement_2);
}

//条件文のブロック化
// if (condition) {
//   statement_1_runs_if_condition_is_true;
//   statement_2_runs_if_condition_is_true;
// } else {
//   statement_3_runs_if_condition_is_false;
//   statement_4_runs_if_condition_is_false;
// }

//条件式内の代入
// if ((x = y)) {
//
// }

//falseと評価される値
false
undefined
null//存在しない
0
NaN//非数
''//空の文字列

// function checkData() {
//   if (document.form1.threeChar.value.length == 3) { //文字列が3のときtrueを返す
//     return true;
//   } else {
//     alert('Entern exactly three characters.' +
//     document.form1.threeChar.value + 'is not valid.'); //3でないときはalertを出してfalseを返す
//     return false;
//   }
// }

//switch文(場合分け)
// switch (expression) {
//   case label_1:
//     statements_1
//     [break;] //switch文から抜ける
//   case label_2:
//     statements_2
//     [break;]
//   default:  //マッチするラベルがなければdefaultを実行
//     statements_def
//     [bread;]
// }

var fluittype = 'Oranges'
switch (fluittype) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound');
    break;
  default:
    console.log('Sorry, we are out of ' + fruittype + '.');
}
console.log("Is there anything else you'd like?")

//例外処理
// function UserException(message) {
//   this.message = message;
//   this.name = 'UserExeption';
// }

// UserExeption.prototype.toString = function() {
//   return this.name + ':"' + this.message + '"';
// }

// throw new UserException('Value too high');

// function getMonthName(mo) {
//   mo = mo - 1;
//   var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jyl',
//                 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   if (months[mo]) {
//     return months[mo];
//   } else {
//     throw 'InvalidMonthNo';
//   }
// }

// try {
//   monthName = getMonthName(myMonth);
// }
// catch (e) {
//   monthName = 'unknown';
//   logMyErrors(e);
// }

// openMyFile();
// try {
//   writeMyFile(theData);
// } catch(e) {
//   hendleError(e);
// } finally {
//   closeMyFile();
// }

function f(){
  try {
    console.log(0);
    throw 'bogus';
  } catch(e) {
    console.log(1);
    return true;
    console.log(2);
  } finally {
    console.log(3);
    return false;
    console.log(4);
  }
  console.log(5);
}
f(); //0.1.3

function f() {
  try {
    throw 'bogus';
  } catch(e) {
    console.log('caught inner "bogus"');
    throw e;
  } finally {
    return false;
  }
}

try {
  f(); //以下は実行されない
} catch(e) {
  console.log('caught outer "bogus"');
}

function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw (new Error('The message'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}
try {
  doSomethingErrorProne();
} catch(e) {
  console.log(e.name);//errorオブジェクトのプロパティ
  console.log(e.message);
}

//do...while文
// var i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);//条件

//while文
n = 0;
x = 0;
while(n < 3) {
  n++;
  x += n;
}
console.log(x)

//ラベル文
// markLoop:
// while(theMark == true) {
//   doSomething();
// }

//break文
// for(i = 0; i < a.length; i++) {
//   if(a[i] == theValue) {
//     break;
//   }
// }

//continue文
var i = 0;
var n = 0;
while(i < 5) {
  i++;
  if(i ==3) {
    continue;
  }
  n += 1;
}
console.log(n);

// var i = 0;
// var j = 10;
// checkiandj:
//   while(i < 4) {
//     console.log(i);
//     i += 1;
//     checkJ:
//       while(j > 4) {
//         console.log(j);
//         j -= 1;
//         if((j % 2) == 0) {
//           continue;
//         }
//         console.log(j + 'is odd.');
//       }
//       console.log('i = ' + i);
//       console.log('j = ' + j);
//   }

//for...in文とfor...of文
// let arr = [3, 5, 7];
// arr.foo = "hello";

// for(let i in arr) {
//   console.log(i); //0, 1, 2, foo //属性名
// }

// for(var i of arr) {
//   console.log(i); //3, 5, 7 //属性の値
// }

//関数
function square(number) {
  return number * number;
}

// var square = function(number){
//   return number * number
// };
// var x = square(4)

// var factorial = function fac(n){ return n<2 ? 1 : n*fac(n-1) };
// console.log(factorial(3));

// function map(f,a) {
//   var result = [];
//   var i;
//   for(i = 0, i != a.length; i++)
//     result[i] = f(a[i]);
//   return result;
// }
// var f = function(x) {
//   return x * x * x;
// }
// var numbers = [0, 1, 2, 5, 10];
// var cube = map(f, numbers);
// console.log(cube);

function factorial(n) {
  if((n == 0)||(n == 1))
    return 1;
  else
    return(n * factorial(n - 1));
}
console.log(factorial(4));

var num1 = 20,
    num2 = 3,
    name = "Chamahk";

function multiply() {
  return num1 * num2;
}

console.log(multiply());

function getScore() {
  var num1 = 2,
      num2 = 3;

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

console.log(getScore());

// function foo(i) {
//   if(i < 0)
//     return;
//   console.log('begin: ' + i);
//   foo(i - 1);
//   console.log('end:' + i);
// }
// foo(3);

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
console.log(addSquares(2,3));

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3);
result = fn_inside(5);

result1 = outside(3)(5);

function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); //6

function outside() {
  var x = 10;
  function inside(x) {
    return x;
  }
  return inside;
}
console.log(outside()(20)); //20

var getCode = (function(){
  var secureCode = "0]Eal(eh&2";

  return function(){
    return secureCode;
  };
})();
getCode();

// var createPet = function(name) {
//   return {
//     setName: function(name) {
//       name = name;//外側のnameには接続不可
//     }
//   }
// }

//配列のような変数
function myConcat(separator) {
  var result = "", //初期化
      i;
  for(i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
console.log(myConcat(':', 'red', 'orange', 'blue'));

function multiply(a, b) {
  b = typeof b !== 'undefined' ? b : 1;

  return a*b;
}
console.log(multiply(5));

//デフォルト引数
function multiply(a, b =1) {
  return a*b;
}
console.log(multiply(5));


//残余引数
function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}
var arr = multiply(2, 1, 2, 3);
console.log(arr);//2, 4, 6

//アロー関数
var a = [
  'Hydrogen',
  'Helium',
  'Lithium'
];
var a2 = a.map(function(s) { return s.length; });
console.log(a2);
var a3 = a.map(s => s.length);
console.log(a3);

//代入
var foo = ['one', 'two', 'three'];
var one = foo[0];
var two = foo[1];
var three = foo[2];
//分割代入
var [one, two, three] = foo;

var mystring = 'alpha';
mystring += 'bet';
console.log(mystring);

//条件演算子(三項演算子)
age = 20;
var status = (age >= 18) ? 'adult' : 'minor';
console.log(status);

var x = [0,1,2,3,4,5,6,7,8,9]
var a = [x,x,x,x,x];
for(var i = 0, j = 9; i <= j; i++, j--)
  console.log('a[' + i + '][' + j + ']=' + a[i][j]);

//単項演算子
x = 42;
var y = 43;
myobj = new Number();
myobj.h = 4;
delete x;
delete y;
delete Math.PI;
delete myobj.h;
delete myobj;

//配列
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
delete trees[3];
if(3 in trees) {
  console.log('実行されない')
}
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
trees[3] = undefined;
if(3 in trees) {
  console.log('実行される')
}
