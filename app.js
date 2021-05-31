/* Chapter 31 to 34 */

// Question NUmber 1
var date = new Date();
document.write("<br>" + date);

// Question NUmber 2
var date = new Date();
var indexOf = date.getMonth();
var months = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
document.write("<br>"+ "Current month: " + months[indexOf]);

// Question NUmber 3
var date = new Date();
var indexOf = date.getDay();
var days = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
document.write("<br>"+ "Today is " + days[indexOf]);

// Question Number 4
var date = new Date();
var indexOf = date.getDay();
var days = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];

if(indexOf === 0 || indexOf === 6){
    document.write("<br>" + "It's fun day");
}
else{

    document.write("<br>"+ "Today is " + days[indexOf]);
}

// Question Number 5
var date = new Date();
var today = date.getDate();
if (today < 16){
    document.write("<br>"+"First fifteen days of the month");
}
else{
    document.write("<br>"+"Last days of the month");
}

// Question Number 6
var date = new Date();
var unixTime = date.getTime();
document.write("<br>" + "Current date: " + date);
document.write("<br>" + "Elapsed milliseconds since January 1, 1970: " + unixTime);
document.write("<br>" + "Elapsed Minutes since January 1, 1970: " + unixTime/(1000*60*60));

// Question Number 7
var date = new Date();
var time= date.getHours();
if(time < 12) {
    alert("It's AM")
}
else {
    alert("It's PM")
}

// Question Number 8
var laterDate = new Date(2020,11,31,00,00,00);
document.write(laterDate);

// Question Number 9
var firstRamdan = new Date("2020/4/24 0:0:0"); //first ramadan in 2020
var currentDate = new Date();
var diffrence = currentDate.getTime() - firstRamdan.getTime();
var daysPassed = diffrence / (1000*60*60*24);
daysPassed = Math.floor(daysPassed);
document.write("<br>" + daysPassed + " days haved passed since 1st Ramadan, 2020");;

// Question Number 10
var currentDate = new Date();
var givenDate = new Date("2021/01/01 00:00:00");
var diffrence = currentDate.getTime() - givenDate.getTime();
diffrence /= (1000*60);
document.write("<br>" + "On reference date " + currentDate + ", " + Math.round(diffrence) + " seconds had passed since begining of 2021");

// Question Number 11
var date = new Date();
document.write("<br>" + "Current Date: " + date);
var hour = date.getHours();
hour--;
date.setHours(hour);
document.write("<br>" + "1 hour ago, it was " + date);

// Question Number 12
var date = new Date();
document.write("<br>" + "Current Date: " + date);
var year = date.getFullYear();
year -= 100;
date.setFullYear(year);
document.write("<br>" + "100 year back, it   was " + date);

// Question Number 13
var UserAge = parseInt(prompt("Enter your age"));
var date = new Date();
var currentYear = date.getFullYear();
var birthYear = currentYear - UserAge;
document.write("<br>"+ "Your age is " + UserAge);
document.write("<br>"+ "Your birth year is " + birthYear);
