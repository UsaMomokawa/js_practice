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

var a1 = true && true;
var a2 = true && false;
var a3 = false && true;
var a4 = false && (3 == 4);
var a5 = 'Cat' && 'Dog'; //Dog
var a6 = false && 'Cat';
var a7 = 'Cat' && false;

var o1 = true || true;
var o2 = false || true; //true
var o3 = true || false;
var o4 = false || (3 == 4);//false
var o5 = 'Cat' || 'Dog'; //Cat
var o6 = false || 'Cat';//Cat
var o7 = 'Cat' || false;

var n1 = !true; //false
var n2 = !false; //true
var n3 = !'Cat' //false

var myFun = new Function('5 + 2');
var shape = 'round';
var size = 1;
var foo = ['Apple', 'Mango'];
var today = new Date();

console.log(typeof myFun);
console.log(typeof shape);
console.log(typeof size);
console.log(typeof foo);
console.log(typeof today);

console.log(typeof doesntExist);
console.log(typeof true);
console.log(typeof null);
console.log(typeof 62);
console.log(typeof 'Hello world');

console.log(typeof Date);

//void式
//<a href="javascript:void(document.form.submit())">Click here to submit</a>

//in演算子
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
console.log(0 in trees);
console.log(6 in trees);
console.log('oak' in trees);
console.log('length' in trees);

//定義済みオブジェクト
console.log('PI' in Math);
var myString = new String('coral');
console.log('length' in myString);

//ユーザー定義オブジェクト
var mycar = {make: 'Honda', model: 'Accord', year: 1998};
console.log("make" in mycar);
console.log("model" in mycar);

//instanceof演算子
var theDay = new Date(1995, 12, 17);
if(theDay instanceof Date) {
  //実行する文
}

//this
function validate(obj, lowval, hival) {
  if((obj.value < lowval) || (obj.value > hival))
    console.log('Invalid Value!');
}
// <p>Enter a number between 19 and 99:</p>
// <input type="text" name="age" size=3 onChange="validate(this, 18, 99);">

//グループ化演算子
var a = 1;
var b = 2;
var c = 3;
console.log(a + b * c);
console.log((a + b) * c);

//new演算子 => インスタンスを作成
var hoge = new String();

//super演算子
// super([引数]);
// super.親の関数([引数]);

//展開演算子 => 展開して配置
var parts = ['shoulder', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];

function f(x, y, z) {}
var args = [0, 1, 2];
f(...args)

//10進数
1234567
//2進数
0b000000000
//8進数
0755
0o10
//16進数
0xFFFFFFFFFFFFF
0x123456789ABCDEF
0XA
//指数表現
1E3//1000
2e6//2000000

//Numberオブジェクト
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;

//Dateオブジェクト
var Xmas95 = new Date("December 25, 1995");
console.log(Xmas95.getMonth());
console.log(Xmas95.getFullYear());

var today = new Date();
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999);
endYear.setFullYear(today.getFullYear()); //todayに1995年を設定
var msPerDay = 24 * 60 * 60 * 1000;

var IPOdate = new Date();
IPOdate.setTime(Date.parse("Aug 9, 1995"));

//文字列
var s1 = "2 + 2";//文字列リテラル
var s2 = new String("2 + 2")//文字列オブジェクト
console.log(eval(s1));
console.log(eval(s2));

var mystring = 'Hello World!';
var x = mystring.length;
console.log(mystring[0]);

console.log("string text line 1\n\
string text line 2");
console.log(`string text line 1
string text line 2`);

var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and\nnot ${2 * a + b}.`);

//正規表現
var myRe = /d(b+)d/g;//gはグローバルサーチのフラグ
var myArray = myRe.exec("csbbdbsbz");
console.log(myArray);

var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);

// var re = /\w+\s/g;
var re = new RegExp('\\w+\\s', 'g');
var str = 'fee fi fo fum';
var myArray = str.match(re);
console.log(myArray);

//インデックス付きコレクション
var arr = [42];//42という要素
var arr = Array(42); //lengthが42

// var arr = Array(9.3);
// console.log(arr);

var emp = [];
emp[0] = 'Casey Jones';
emp[1] = 'Phil Lesh';
emp[2] = 'August West';

var arr = [];
arr[3.4] = 'Oranges';
console.log(arr.length);//0
console.log(arr.hasOwnProperty(3.4));//属性になる

var arr = ['Wind', 'Rain', 'Fire'];
console.log(arr[2]);
console.log(arr['length']);

//配列の反復処理
var colors = ['red', 'green', 'blue'];
// for(var i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }
colors.forEach(color => console.log(color));

//配列のメソッド
var myArray = new Array('1', '2', '3');
myArray = myArray.concat('a', 'b', 'c');
console.log(myArray);

var myArray = new Array('Wind', 'Rain', 'File');
var list = myArray.join('-');
console.log(list);

var myArray = new Array('1', '2', '3');
myArray.push('4');
console.log(myArray);

myArray.pop();
console.log(myArray);

var first = myArray.shift();
console.log(myArray);

myArray.unshift('5', '4');
console.log(myArray);

myArray = new Array('Eat', 'An', 'Resource');
var sortFn = function(a, b) {
  if(a[a.length - 1] < b[b.length - 1]) return -1;
  if(a[a.length - 1] > b[b.length - 1]) return 1;
  if(a[a.length - 1] == b[b.length - 1]) return 0;
}
console.log(myArray.sort(sortFn));

var a = ['a', 'b', 'c'];
a.forEach(function(element){ console.log(element)});

var a1 = ['a', 'b', 'c'];
var a2 = a1.map(function(item) {return item.toUpperCase(); });
console.log(a2);

function isNumber(value) {
  return typeof value === 'number';
}
var a1 = [1, 2, 3];
console.log(a1.every(isNumber));
var a2 = [1, '2', 3];
console.log(a2.every(isNumber));
console.log(a2.some(isNumber));

var a = [10, 20, 30];
var total = a.reduce(function(first, second) {return first + second; }, 0);
console.log(total);//60

var a = new Array(4);
for(i = 0; i < 4; i++){
  a[i] = new Array(4);
  for(j = 0; j < 4; j++) {
    a[i][j] = '[' + i + ',' + j + ']';
  }
}
console.log(a);

//mapオブジェクト
var sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
console.log(sayings.size);
console.log(sayings.get('cat'));
console.log(sayings.has('bird'));

for(var[key, value] of sayings) {
  console.log(key + 'goes' + value);
}
sayings.clear();
console.log(sayings.size);

//setオブジェクト
var mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');

console.log(mySet.has(1));
mySet.delete('foo');
console.log(mySet.size);

for(let item of mySet) console.log(item);

//オブジェクト
var myCar = new Object();
myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;

function showProps(obj, objname) {
  var result = '';
  for(var i in obj) {
    if(obj.hasOwnProperty(i)) {
      result += objname + '.' + i + '=' + obj[i] + '\n';
    }
  }
  return result;
}
console.log(showProps(myCar, "myCar"));

//オブジェクトの初期化
// var obj = { property_1:   value_1,
//             2:            value_2,
//             'property n': value_n };

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
var rand = new Person('Rand McKinnon', 33, 'M');
var ken = new Person('Ken Jones', 39, 'M');
console.log(rand);

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
console.log(car1);

var Animal = {
  type: 'Invertebrates',
  displayType: function(){
    console.log(this.type);
  }
}

var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType();

// var o = {
//   a: 7,
//   get b(){
//     return this.a + 1;
//   },
//   set c(x){
//     this.a = x / 2;
//   }
// };
// console.log(o.a);
// console.log(o.b);
// o.c = 50;
// console.log(o.a);

var d = Date.prototype;
Object.defineProperty(d, 'year', {
  get: function(){ return this.getFullYear(); },
  set: function(y) { this.setFullYear(y); }
});
var now = new Date();
console.log(now.year);
now.year = 2001;
console.log(now);

var o = {
  a: 7,
  get b() {return this.a + 1; },
  set c(x) {this.a = x / 2; }
};
console.log(o.b);
o.c = 50;
console.log(o.a);

var o = { a: 0 };
Object.defineProperties(o, {
  'b': {get: function(){return this.a + 1;}},
  'c': {set: function(x){this.a = x / 2;}}
});
o.c = 10;
console.log(o.b);
console.log(o.a);

var myobj = new Object;
myobj.a = 5;
myobj.b = 12;
delete myobj.a;
console.log('a' in myobj);

g = 17;
delete g;

//比較演算子
var fruit = {name: 'apple'};
var fruitbear = {name: 'apple'};
console.log(fruit == fruitbear);
console.log(fruit === fruitbear);//同じプロパティを持っていてもfalse

var fruit = {name: 'apple'};
var fruitbear = fruit;
console.log(fruit == fruitbear);
console.log(fruit === fruitbear);
fruit.name = 'grape';
console.log(fruitbear);
