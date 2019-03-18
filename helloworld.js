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

//条件処理
