/**
 *  const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能

// val1 =  "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能

// var val1= "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可

// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";
// console.log(val3);

// const val4 = {
//   name: "わたる",
//   age: 30,
// };
// val4.name = "Wataru";
// val4.address = "Aichi";
// console.log(val4);
// // constで定義したオブジェクトはプロパティの変更が可能

// const val5 = ['dog','cat'];
// val5[0] = "bird";
// val5.push("monky");
// console.log(val5);
// // constで定義した配列はプロパティの変更が可能

/**
 * テンプレート文字列
 */

// const name = "わたる";
// const age = 30 ;
//  // 「私の名前はわたるです。年齢は30歳です。」

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str){
//   return str;
// }
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));

// const nameArr = ["田中", "山田", "わたる"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index + 1}番目は${nameArr[index]}です。`)
// }

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if(name === "わたる"){
//     return name
//   } else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */

 // ある条件？条件がtrueの時 : 条件がfalseの時
//  const val1 = 1 > 0 ? 'trueです。' : 'falseです。'
//  console.log(val1);

// const num = "1300";
// // console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください。';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています!!' : '許容範囲内です。';
// }

// console.log(checkSum(50, 60))

/**
 * 論理演算子
 */

//  const flag1 = true;
//  const flag2 = false;

//  if (flag1 || flag2){
//    console.log("1か2はtrueになります");
//  }
//  if (flag1 && flag2){
//   console.log("1も2もtrueになります");
// }

// // ||は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です。";
// console.log(fee);

// //&&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);