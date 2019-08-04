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
