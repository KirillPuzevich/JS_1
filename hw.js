'use strict'
let x = 20;
let y = 58;
let z = 42;

let sum = x + y + z;

console.log(sum);



const secMin = 60;
const minHour = 60;
const hourDay = 24;
const dayYear = 365;

const myAgeInSecond = secMin * minHour * hourDay * dayYear * 20;

console.log(myAgeInSecond);



const count = 42;
const userName = '42';

const userNameNumberFirst = Number(userName);
const userNameNumberSecond = +userName;
const countStringFirst = String(count);
const countStringSecond = count.toString();

console.log(typeof countStringFirst, count);
console.log(typeof countStringSecond, count);
console.log(typeof userNameNumberFirst, userName);
console.log(typeof userNameNumberSecond, userName);


let a = 1
let b = 2
let c = 'белых медведей'

const result = a + '' + b + ' ' + c;

console.log(result);

const access = "доступ";
const marine = "морпех";
const ice = "наледь";
const reproach = "попрек";
const chopped = "рубило";

const lengthWords = access.length + marine.length + ice.length + reproach.length + chopped.length;

console.log(lengthWords);


const name = "Кирилл";
const age = 20;
const goodStudent = true;

console.log(`Variable: ${name} has type: ${typeof name}`);
console.log(`Variable: ${age} has type: ${typeof age}`);
console.log(`Variable: ${goodStudent} has type: ${typeof goodStudent}`);



// const namePromt = prompt("Введите ваше имя");
// const agePromt = prompt("Введите ваш возраст");

// alert(`Вас зовут ${namePromt}`);
// alert(`Вам ${agePromt} лет`);


let aa = 4;
let bb = 3;

aa = aa + bb; 
bb = aa - bb; 
aa = aa - bb; 

console.log(aa); 
console.log(bb); 


let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";


const cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];


console.log(cipher); 










