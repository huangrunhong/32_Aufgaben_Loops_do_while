// =============================
//       Loops-Level-1_3
// =============================
console.log("%c=====Loops-Level-1_3=====", "color:yellowgreen");
let number = 0;
while (number < 10) {
  console.log("Hallo World " + number);
  number++;
}

// =============================
//       Loops-Level-1_7
// =============================
console.log("%c=====Loops-Level-1_7=====", "color:yellowgreen");
let num = 1;
const lvl_7 = document.body.querySelector("#lvl_7");
do {
  console.log("The number ist " + num);
  lvl_7.innerHTML += `The number ist ${num} <br>`;
  num++;
} while (num <= 5);

// =============================
//       Loops-Level-1_8
// =============================
console.log("%c=====Loops-Level-1_8=====", "color:yellowgreen");
let zahl = 2;
const lvl_8 = document.body.querySelector("#lvl_8");
do {
  lvl_8.innerHTML += `${zahl}<br>`;
  zahl += 2;
} while (zahl < 20);
