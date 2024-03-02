// Examen JavaScript Amaliy savollar

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini

let randomNumber = prompt("Write a random number😊");
let second = prompt("Write again number number😊");

var otvet = 5;
var otvet2 = 2;
var hehe = otvet % otvet2;
alert("Answer is: " + hehe);

// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini

let mathMethods = Math.floor(Math.random() * 10 + 1);
alert(mathMethods);

// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring!

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!

let butunSonlar = Math.floor(12.510);
alert(butunSonlar);

// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering

function Letters(wordS) {
  return word.replace(/\s/g, "").length;
}

var word = "MARS IT SCHOOL";
var letterCount = Letters(word);
alert("MARS IT SCHOOL bu sozdan iborat : " + letterCount);

// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering

let sozlar = "MARS IT SCHOOL";
for (let sozlar = 0; sozlar < 11; sozlar++) {
  console.log(sozlar + " MARS IT SCHOOL");
}

// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering

let harflar = [
  "a",
  "b",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "y",
  "z",
];

console.log(
  `${harflar[17]}${harflar[3]}${harflar[16]}${harflar[9]}${harflar[0]}${harflar[12]}`
);

// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering

let yosh = +prompt("Yoshingizni kiriting");

if (yosh > 18) {
  alert("Good Job!👌");
} else {
  alert("Sorry😭😭");
}

// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering

let Myname = "Serkan";
let reversed = Myname.split("").reverse().join("");
console.log(reversed);

// 9-savol Switch case

// Promt 1 dan 7 gacha bo'lgan raqam kiriting va kiritilgan raqam qaysi hafta kuniga to'gri kelishini chiqarib bering
// masalan 4 raqamini kiritsam console.log da("Siz kiritgan raqam haftaning Payshanba kuniga to'gri keladi") bo'lib chiqish kerak
// agar kiritilgan raqam 7 dan katta bolsa ya'ni 8 yoki 15 kiritilsa console da (Namalum raqam kiritdingiz ) deb chiqish kerak

// ввести в промпт цифру от 1 до 7, и вывести к какому дню недели он равен, если больше 7 то сказать что такого дня нет

// Javob:Kodini yozib bering

// let raqamlar = +prompt("Random Raqam Yozing");

switch (raqamlar) {
  case 1:
    console.log("Togri raqam");
    break;
  case 2:
    console.log("Togri raqam");
    break;
  case 3:
    console.log("Togri raqam");
    break;
  case 4:
    console.log("Togri raqam");
    break;
  case 5:
    console.log("Togri raqam");
    break;
  case 6:
    console.log("Togri raqam");
    break;
  case 7:
    console.log("Togri raqam");
    break;
  default:
    console.log("Notogri raqam");
    break;
}

// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов

// Javob :Kodini yozib bering

let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " Juft raqam");
  }
}
