//question1
var str1 = 'Today is';
var str2 = '      a beautiful day     ';
var str3 = ' In Hawaii.     ';
var result1=str1.trim()+" "+str2.trim()+" "+str3.trim();
console.log(result1);
///////////////
// question2
///////////////
var enteredAlphabet='d';
switch(enteredAlphabet)
{
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'o':
    case 'O':
    case 'u':
    case 'U':
        console.log('vowel');
        break;
   case 'b':
   case 'B':
   case 'c':
   case 'C':
   case 'd':
   case 'D':
   case 'f':
   case 'F':
   case 'g' :
   case 'G':
   case 'h':
   case 'H':
   case 'j':
   case 'J':
   case 'k' :
   case 'K':
   case 'l' :
   case 'L':
   case 'm':
   case 'M':
   case 'n':
   case 'N':
   case 'p':
   case 'P':
   case 'q':
   case 'Q':
   case 'r':
   case 'R':
   case 's': 
   case 'S':
   case 't':
   case 'T':
   case 'v':
   case 'V':
   case 'w':
   case'W':
   case'y':
   case'Y':
   case'z':
   case'Z':
       console.log("Consonant");
       break;
 default : 
  console.log("non-alphabet");
}
/////////////
//question3//
////////////
let  num1=prompt('enter num1');
let num2=prompt('enter num2');
 console.log("1.Addition");
 console.log("2.SUBTRACTION");
 console.log("3.MUlTIPLICATION");
 console.log("4.DIVISON");
 console.log("choose a number from menu  for operation");
menu=4;
switch(menu){
    case 1:
        console.log(num1+num2);
        break;
    case 2:
        console.log(num1-num2);
        break;
    case 3:
        console.log(num1*num2);
        break;
    case 4:
        console.log(num1/num2);
        break;
    default:
       console.log("enter valid  menu");
        
}   
//////////////
//question4//
/////////////
var  a=prompt('enter a vlue');
var  b=prompt('enter b value');
var  c=prompt('enter c value');
if (a===b&&b===c&&c===a){
  console.log("Equilateral Triangle");
}
else if(a===b||a===c||b===c){
  console.log("Isosceless Triangle");
}
else{
  console.log("Scalene Triangle");
}
/////////////////
// Question 5://
////////////////
let units=300;
let surcharge;
let totalBill;
let result;
if (units <= 50) {
    totalBill = units * 0.5;
    console.log(totalBill);
  } 
  else if (units <= 150) {
    totalBill = 50 * 0.5 + (units - 50) * 0.75;
    console.log(totalBill);
  } 
  else if (units <= 250) {
    totalBill = 50 * 0.5 + 100 * 0.75 + (units - 150) * 1.2;
    console.log(totalBill);
  } 
  else {
    totalBill = 50 * 0.5 + 100 * 0.75 + 100 * 1.2 + (units - 250) * 1.5;
    surcharge=totalBill*0.2;
    result =surcharge+totalBill;
    console.log(result);
  }

