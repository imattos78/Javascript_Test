/* Iterate 0 to 10 using for loop, do the same using while and do while loop. */

/* LOOP FOR */
for (let i = 0; i <= 10; i++){
    console.log(i);
}

/* WHILE LOOP */
let i = 0;
while (i <= 10){
    console.log(i);
    i++;
}

/* DO WHILE LOOP */
let j = 0;
do{
    console.log(j);
    j++
}while (j <= 10);

/* Iterate 10 to 0 using for loop, do the same using while and do while loop. */

/* FOR LOOP */
for (let a = 10; a >= 0; a--){
    console.log(a);
}

/* WHILE LOOP */
let c = 10;
while (c >= 0){
    console.log(c);
    c--
}

/* DO WHILE */
let f = 20;
do {
    console.log(f);
    f--
}while (f >= 0);

/* Write a loop that makes seven calls to console.log to output the following triangle:
    #
    ##
    ###
    ####
    #####
    ######
    #######
 */
for (let e = 1; e <= 7; e++){
    let sign = '#'
    console.log(sign.repeat(e));
}

/* Iterate the array, ['HTML', 'CSS', 'JavaScript'] using a for loop and print out the items. */
let array = ['HTML', 'CSS', 'JavaScript'];
for (let b = 0; b < array.length; b++){
    console.log(array[b]);
}

/* Use for loop to iterate from 0 to 100 and print only even numbers */
for (let d = 0; d <= 100; d++){
    if (d % 2 === 0){
        console.log(d);
    }
}

/* Use for loop to iterate from 0 to 100 and print only odd numbers */
for (let d = 0; d <= 100; d++){
    if (d % 2 !== 0){
        console.log(d);
    }
}

/* Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.*/
let sum = 0;
for (let f = 0; f <= 100; f++){
    sum = sum + f   
}
console.log(`The sum all numbers is ${sum}`);

/* Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. */
let sumOdds = 0;
let sumEven = 0;
for (let g = 0; g <= 100; g++){
    if (g % 2 == 0){
        sumEven += g; 
    }else if ( g % 2 !== 0){
        sumOdds += g;
    }
}
console.log(`The sum of all even number is: ${sumEven} and the sum of all odds number is: ${sumOdds}`);