"use strict";
let name='aayush';
let fatherName='kameshwar prasad keshri';
console.log(fatherName.length); //to find length of the string
console.log(name[2]); //to find a letter ar particular index number
console.log(name[name.length-1]); //to find the last element of the string
// string indexing start from 0 and spaces also inculude in it.


// to trim empty spaces in a string
let name1='    kaalia    ';
console.log(name1.length); 
name1=name1.trim();
console.log(name1.length);

// TO MAKE UPPER CASE
name1= name1.toUpperCase();
console.log(name1);
let name2='SOORYAWANSHI';
name2= name2.toLowerCase();
console.log(name2);

// TO SLICE A STRING;  
// string.slice(starting_index,end_index)
let slicestring = fatherName.slice(0,15);
console.log(slicestring);

// CONCATENATE  STRING
let string1='harshvarshan ';
let string2 = 'pratap ';
let string3 = 'singhania';
let full = string1+string2+string3;
console.log(full);