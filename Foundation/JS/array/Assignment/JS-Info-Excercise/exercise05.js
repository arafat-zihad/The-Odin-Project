/*
Leap Year
- Divisible by 4
- not divisible by 100
- divisible by 400
*/

function leapYear(year) {
  const result = false;
  if (year % 400 === 0) {
    console.log("is a leap year");
  } else if (year % 4 === 0 && year % 100 !== 0) {
    console.log("is a leap year");
  } else {
    console.log("is not a leap year");
  }
}

leapYear(2004);
