/* Declare an array with more than 5 number of items */
let arr = [23, 12, 45, 98, 09, 40, 78];

/* Find the length of your array */
let long = arr.length;
console.log(long);

/* Get the first item, the middle item and the last item of the array */
let firstItem = arr[0];
let middleItem = arr[3];
let lastItem = arr.length -1;
console.log(arr[lastItem]);
console.log(firstItem);
console.log(middleItem);

/* Declare an array called mixedDataTypes,put different data types and in your array and the array size should be greater than 5 */
let mixedDataTypes = [12, 'Hello World', true, 3.14, 'test', false ];

/* Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon. */
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

/* Print the array using console.log() */
console.log(itCompanies);

/* Print the number of companies in the array */
console.log(itCompanies.length);

/* Print the first company, middle and last company */
console.log(itCompanies[0]);
console.log(itCompanies[3]);

let lastCompany= itCompanies.length -1;
console.log(itCompanies[lastCompany]);

/* Print out each company */
itCompanies.forEach((element) =>{
    console.log(element);
})

/* Change companies to uppercase and print them out */
itCompanies.forEach((element) =>{
    console.log(element.toUpperCase());
})

/* Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. */
console.log(`${itCompanies.toString()} are big IT companies.`);

/* Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found. */

    if (itCompanies.includes('Apple')){
       console.log('Apple')
    }else {
        console.log('Company not found');
    }

/* Filter out companies which have more than one 'o' without the filter method */
let words = [];
for (let e = 0; e < itCompanies.length; e++){
    if (itCompanies[i])
}

