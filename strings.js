//Declare a variable name company and assign it to an initial value "Coding Academy".
let company = "Coding Academy";

//Print the string on the browser console using console.log()
console.log(company);

//Print the length of the string on the browser console using console.log()
console.log(company.length);

//Change all the string to capital letters using toUpperCase() method
console.log(company.toUpperCase());

//Change all the string to lowercase letters using toLowerCase() method
console.log(company.toLowerCase());

//Cut(slice) out the first word of the string using slice, substr() or substring() method
let cutOut = company.slice(7);
console.log(cutOut);
let substr = company.substr(7);
console.log(substr);
let string = company.substring(7);
console.log(string);

//Use substr to slice out the phase because because because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
let newSentence = sentence.substr(31, 23);
console.log(newSentence);

//Check if the string contains a word Academy using includes() method
let word = "Academy";
console.log(`The word "${word}" ${company.includes(word) ? 'is' : 'is not'} in the sentence.`);

//Split the string into array using split() method
let arr = company.split(' ');
console.log(arr);

//"Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon" split the string at the comma and change it to an array.
let str = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let _arr = str.split(' ');
console.log(_arr);

//Change Coding Academy to Microsoft Academy using replace() method.
let change = company.replace("Coding", "Microsoft");
console.log(change);

//What is character at index 10 in "Coding Academy" string use charAt() method.
let char = company.charAt(10);
console.log(char);

//What is the character code of A in 'Coding Academy' string using charCodeAt()
let code = company.charCodeAt(7);
console.log(code);

//Use indexOf to determine the position of the first occurrence of c in Coding Academy
let index = company.indexOf("c");
console.log(index);

//Use lastIndexOf to determine the position of the last occurrence of c in Coding Academy.
let lastIndex = company.lastIndexOf("c");
console.log(lastIndex);

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let _str = 'You cannot end a sentence with because because because is a conjunction';
let _word = "because";
console.log(_str.indexOf(_word));
console.log(_str.lastIndexOf(_word));

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let search = _str.search("because");
console.log(search);

//Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g " Coding Academy ".
let _str1 = " Coding Academy    ";
console.log(_str1.trim());

//Use startsWith() method with the string Coding Academy make the result true
console.log(company.startsWith("A", 7));

//Use endsWith() method with the string Coding Academy make the result true
console.log(company.endsWith("ad", 11));

//Use match() method to find all the c’s in Coding Academy
console.log(company.match(/c/ig)); //ig ignore case

//Use match() to count the number all because's in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log((_str.match(/because/g) || []).length); //print: 3

//Use concat() and merge 'Coding' and 'Academy' to a single string, 'Coding Academy'
let str1 = 'Coding';
let str2 = 'Academy';
console.log(str1.concat(" ", str2));

//Use repeat() method to print Coding Academy 5 times
let _word_ = "Coding Academy ";
console.log(_word_.repeat(5));

/* Calculate the total annual income of the person by extract the numbers from the following text. 
'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
 */

let str3 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

function numbers (){
let array2 = str3.split(' ');
//let sum = array2.filter(num => Number.parseInt(num));
let int = array2.map(Number).filter(num => num);
let sum = int.reduce(function (a,b){
    return a + b;
});
return sum;
}
console.log(numbers())
