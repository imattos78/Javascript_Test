let actualDate = 2019;
let retirmentDate = 2045;
let totalSave = 50000;
let yearsToPay = 10

let payment = () =>{
 let totalMonths = (retirmentDate - actualDate) * 12; // x 12 months
 let monthlyPayment = totalSave / (yearsToPay * 12);
 let saveMonthly = totalSave / totalMonths;
 console.log(`My retirement year is : ${retirmentDate}. I have: ${totalSave} save. I am going to earn ${monthlyPayment} p / month for 10 years. Money I need to save p /month: ${saveMonthly}`);
}
payment()
/* payment/month &  payment due x month */