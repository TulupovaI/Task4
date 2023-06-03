//Умовні конструкції. Цикли
//№1
let a = 492;
let b = 123;

if(a > b) {
  console.log(`Число ${a} більше ніж число ${b}`)
} else { 
  console.log(`Число ${b} більше ніж число ${a}`)
};



//№2
let c = 123 * 0.305;
let d = 492 * 1000;

if(d > c) {
  console.log(`Число ${d} більше ніж число ${c}`)
} else { 
  console.log(`Число ${c} більше ніж число ${d}`)
};



//№3
if(a % b === 0) {
  console.log(`Число ${b} є дільником числа ${a}`)
} else if(b % a === 0) { 
  console.log(`Число ${a} є дільником числа ${b}`)
}

//№4
if(a % 2 === 0) {
  console.log(`Число ${a} є парне`)
} else {
  console.log(`Число ${a} є непарне`)
}
console.log(a % 10);


//№5
let num = 67;
let num1 = Math.floor(num / 10);
let num2 = num % 10;

if(num1 > num2) {
  console.log(`Число ${num1} більше ніж число ${num2}`)
} else { 
  console.log(`Число ${num2} більше ніж число ${num1}`)
};

//№6
let num3 = Math.floor(a / 100);
let num4 = Math.floor(a % 100 / 10);
let num5 = a % 10;
let resSum = num3 + num4 + num5;
let resMult = num3 * num4 * num5;

if ((resSum) % 2 === 0){
  console.log(`Число ${res} є парне`)
} else {
  console.log(`Число ${resSum} є непарне`)
};

if (resSum % 5 === 0) {
   console.log(`Число ${resSum} кратне 5`)
} else {
  console.log(`Число ${resSum} не кратне 5`)
};

if(resMult > 100) {
  console.log(`Число ${resMult} більше ніж 100`)
} else { 
  console.log(`100 більше ніж число ${resMult}`)
};


//№7

if (num3 == num4 && num4 == num5){
  console.log(`цифри числа однакові`)
} else {
  console.log(`цифри числа різні`)
};

if (num3 == num4 || num4 == num5 || num3 == num5){
  console.log(`в числі є однакові цифри`)
} else {
  console.log(`в числі намає однакових цифр`)
};


//№8
let number1 = 143321;
let number2 = String(number1).split("").reverse().join("");

if (number1 == number2) {
  console.log(`число ${number1} - дзеркальне`)
} else {
  console.log(`чсло ${number1} -  не дзеркальне`)
};
