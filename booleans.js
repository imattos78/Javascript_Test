/* Write a code which give grade students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0 -49, F */

let grade = score => {
    if (score <= 49){
        console.log("Grade F");
    }else if (score > 49 && score <=59){
        console.log("Grade D");
    }else if (score > 59 && score <=69){
        console.log("Grade C")
    }else if (score > 69 && score <= 89){
        console.log("Grade B");
    }else {
        console.log("Grade A");
    }
}
grade(80);

/* Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
 */

 let season = user =>{
    if (user == 'September' || user == 'Octuber' || user == 'November'){
        console.log("The season is Autumn");
    }else if (user == 'December' || user == 'January' || user == 'February'){
        console.log("The season is Winter");
    }else if (user == 'March' || user == 'April' || user == 'May'){
        console.log("The season is Spring");
    }else if (user == 'June' || user == 'July' || user == 'August'){
        console.log("The season is Summer");
    }
 }
 season('Octuber');
