// CHAPTER 13

// Q 1

var emptyArray = [];

// Q 2

var emptyObjectArray = new Array();

// Q 3

var strings = ["Yamin" , "Ahmed" , "Raza"];
document.write(strings);

// Q 4

var numbers = [20 , 19 , 18 , 17 , 16 , 15];
document.write(numbers);

// Q 5

var booleans = [true , true , false , true , false , false];
document.write(booleans);

// Q 6

var mixed = ["Yamin" , 20 , "Matric" , true];
document.write(mixed);

// Q 7

var qualification = ["HSC" , "SSC" , "BCS" , "BS" , "B.COM" , "MS" , "M.PHIL" , "PHD"];

document.write("<ol>");
document.write(`<li>${qualification[0]}</li>`);
document.write(`<li>${qualification[1]}</li>`);
document.write(`<li>${qualification[2]}</li>`);
document.write(`<li>${qualification[3]}</li>`);
document.write(`<li>${qualification[4]}</li>`);
document.write(`<li>${qualification[5]}</li>`);
document.write(`<li>${qualification[6]}</li>`);
document.write(`<li>${qualification[7]}</li>`);
document.write("</ol>");

// Q 8

var students = ["Yamin", "Raza", "Ahmed"];
var score = [420, 380, 480];

var totalMarks = 500;
var percentage = [
  (score[0] / totalMarks) * 100,
  (score[1] / totalMarks) * 100,
  (score[2] / totalMarks) * 100
];

document.write(`${students[0]} scored ${score[0]} out of ${totalMarks}, ${percentage[0]}% <br> `);
document.write(`${students[1]} scored ${score[1]} out of ${totalMarks}, ${percentage[1]}% <br> `);
document.write(`${students[2]} scored ${score[2]} out of ${totalMarks}, ${percentage[2]}% <br> `);

// Q 9

 var colors = ["Red", "Green", "Blue"];
 document.write("<p>" + colors + "</p>");

 // a. Add color start
 var addColor = prompt("Enter a color to add the start:");
 colors.unshift(addColor);
 document.write(`<p> Add color start ${colors} </p>`);

 // b. Add color end
 var addColorEnd = prompt("Enter a color to add the end:");
 colors.push(addColorEnd);
 document.write(`<p> Add color end ${colors} </p>`);

 // c. Add two colors start
 colors.unshift("Yellow", "Orange");
 document.write(`<p> Add two colors start ${colors} </p>`);

 // d. Deleted first color
 colors.shift();
 document.write(`<p> Deleted first color ${colors} </p>`);

 // e. Deleted last color
 colors.pop();
 document.write(`<p> Deleted last color ${colors} </p>`);

 // Q 10

var score = [10, 90, 95, 70, 25, 74, 45, 50];
document.write(`Score of Student ${score} <br> `)
score.sort();
document.write(`Order Score of Student ${score} <br>`)

// Q 12

var sentence = ["This", "is", "my", "cat"];
document.write(`Before concate result ${sentence} <br>`)

var concate = sentence.join(" ");
document.write(`After concate result ${concate} <br>`)

// Q 15

var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write(`${phones} <br>`);

var phonesConcate = phones.join(" ");
document.write(`${phonesConcate} <br>`);

document.write("<br> <br> <select>");
document.write(`<option> ${phones[0]}  </option>`);
document.write(`<option> ${phones[1]}  </option>`);
document.write(`<option> ${phones[2]}  </option>`);
document.write(`<option> ${phones[3]}  </option>`);
document.write(`<option> ${phones[4]}  </option>`);
document.write(`<option> ${phones[5]}  </option>`);
document.write("</select>");