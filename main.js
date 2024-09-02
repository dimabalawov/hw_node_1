const { isP, point1, point2 } = require('./point');

const Human = require('./human');

const { Fracture, SumFracture,SubtractFracture, MultiplyFracture,DivideFracture } = require('./fractures');

const Students = require('./students');


isP(point1, point2);

var person = new Human(); 
person.fillHuman('John', 'Doe', 30, 'Male'); 
person.printHuman(); 

var f1 = new Fracture(2,5);
var f2 = new Fracture(3,7);
console.log('---Fractures---');
console.log('Summ = ' + SumFracture(f1,f2).toString());
console.log('Minus = ' + SubtractFracture(f1,f2).toString());
console.log('Multiply = ' + MultiplyFracture(f1,f2).toString());
console.log('Divide = ' + DivideFracture(f1,f2).toString());

var students = new Students();
students.addStudent("John","20","3");
students.addStudent("Jane","19","2");
students.addStudent("Kyle","21","4");
students.showAll();
students.popStudent(1);
students.changeStudent(0,"Marvin","22","4");
students.showAll();

