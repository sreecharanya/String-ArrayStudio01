const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let str1;
str1=str.slice(0,3)
console.log(str1)
let str2=str.slice(3,10)
console.log(str2)

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Using slice ${str}, has become ${str2+str1}.`)


//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let user =input.question("Entr the word:")
let relo=Number(input.question("Enter the number of leters to go back:"))

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if(user.includes(" "))
{
console.log("*********You cannot enter more than a word**************")
user=user.split(" ")
//console.log(user)
let user1=user[0].slice(0,3)
console.log(user1)
let user2=user[0].slice(3)
console.log(user2)
console.log(`The word ${user[0]} has become ${user2+user1}.`)
}else{
  user=user.split(" ")
console.log(user)
let user1=user[0].slice(0,relo)
console.log(user1)
let user2=user[0].slice(relo)
console.log(user2)
console.log(`The word ${user[0]} has become ${user2+user1}.`)
}