//PRIMITIVE DATA TYPES;
//NUMBER,STRING,UNDEFINED,NULL,BIGINT,SYMBOL;

// TO CONVERT NUMBER INTO STRING
// ONE METHOD IS TO ADD "" WITH A NUMBER VALUE
let number = 69;
console.log(typeof(number));  //output=number
let number2= 69+ '';
console.log(typeof(number2)); //output=string
 
//CONVERT STRING TO NUMBER
// TO CONVERT STRING TO A NUMBER ADD A + SIGN IN FRONT OF THE STRING
let string= 'aayush';
console.log(typeof(string));    // output :- string
let string1= +'aayush';
console.log(typeof(string1));   // output :- number

let myNumber=  BigInt(123654789);
let mynumber = 1546231n;
//both formats are used for the big int number;
console.log(myNumber,mynumber);