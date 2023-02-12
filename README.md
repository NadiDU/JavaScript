# JavaScript

let item1 = 5;
console.log("Result = ", item1);

let item2 = 3;
console.log("Result = ", item2);

let item3 = item1+ item2;
console.log("Result = ", item3);

let item4= "Yolochka";
console.log (item4, typeof item4);

console.log(item3 + item4); 

console.log(item3 * item4);

let item5 = item3;
let item6 = 15;
let item6_type = typeof(item6);

21. Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——  
console.log("item6 == " +item6, "item6_type == " +item6_type);

let item7 = "item6";
let item7_type = typeof(item7);

22. Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——  
console.log("item7 == "  +item7,  "item7_type == "  +item7_type);

26. Создать переменную “age_1” и присвоить ей значение 10
27. Создать переменную “age_2” и присвоить ей значение 18
28. Создать переменную “age_3” и присвоить ей значение 60


let age_1 = 10;
let age_2 = 18;
let age_3 = 60;

if (age_1 < age_2){
    console.log("You don't have access cause your age is " +age_2 +" It's less then ")   
} 
else if (age_1 >= age_2, age_1 < age_3){
    console.log("Welcome!")
} 
else if (age_1 > age_3){
    console.log("Keep calm and look Culture channel")
} 
else {
    console.log("Technical work")
} 
