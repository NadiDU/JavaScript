//Сделать функцию которая при вызове напишет в консоль сумму 2-х переданных в неё чисел
function Summa(S1, S2) {
    console.log(S1 + S2);
   };
   
   Summa(10, 21);


//Сделать функцию которая вернёт в консоль квадрат переданного числа
function Square(Q1) {
    return Q1*Q1;
   };
   console.log(Square(3));
   
 
//Сделать функцию. На вход принимaет 3 параметра (Ф,И,О). Вернёт JSON
function User(name, surname, middlname) {
    
    console.log(name + " " + surname + " " + middlname); 
    
   };
   
 User ('Anna', 'Smith', 'Tomovna');

 //Сделать функцию. На вход принимет 3 параметра (Ф,И,О). Вернёт JSON 
/*{"name":И,
 "surname":Ф,
 "middlename":О}*/

 function create_json (surname, name, middlename) {
    let person_data = {
        "surname": surname,
        "name": name,
        "middlename": middlename
    };
    let person_data_to_json =JSON.stringify(person_data)
    console.log(person_data_to_json) 
    return person_data_to_json
}
create_json("Smith","Alex","Tomovich")
 
//Вывести в консоль переменную-массив в которой будут все чётные числа. Переменную возвращяет функция которая на вход принимает массив чисел. Если чётных чисел не нашлось, то функция вернёт текст "No even numbers"

function evenNumbers(data) {
  let even_number = data.filter(num => num % 2 === 0);
//   filter возвращает массив из всех подходящих элементов:
  if (even_number.length === 0) {
    console.log("No even numbers");
  } else {
    console.log(even_number);
  }
}
  evenNumbers([ 1,  2,  3,  4,  5,  6,  7,
    8,  9, 10, 11, 12, 13, 14,
   15, 16, 17, 18, 19]) 
