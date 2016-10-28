var Person = function(name, employeeNumber, salary, employeeRating) {
  this.name = name;
  this.employeeNumber = employeeNumber;
  this.salary = salary;
  this.employeeRating = employeeRating;
}

var atticus = new Person("Atticus", "2405", "47000", 3);
var jem = new Person ("Jem", "62347", "63500", 4);
var boo = new Person("Boo", "11435", "54000", 3);
var scout = new Person("Scout", "6243", "74750", 5);
var robert = new Person("Robert", "26835", "66000", 1);
var mayella = new Person("Mayella", "89068", "35000", 2);

var employees = [atticus, jem, boo, scout, robert, mayella];

function bonus(employee) {
  var bonusArray = [];
  bonusArray[0] = employee.name;

  if(employee.employeeRating <= 2){
    bonusArray[1] = 0;

  } else if(employee.employeeRating == 3){
    bonusArray[1] = 0.04;

  } else if(employee.employeeRating == 4){
    bonusArray[1] = 0.06;

  } else if(employee.employeeRating == 5){
    bonusArray[1] = 0.10;
  }
  if (employee.employeeNumber.length == 4) {
    bonusArray[1] += .05;
  }
  if (parseInt(employee.salary) > 65000) {
    bonusArray[1] -= .01;
  }
  if (bonusArray[1] > .13) {
      bonusArray[1] = .13;
  } else if (bonusArray[1] < 0) {
      bonusArray[1] = 0;
  }
  bonusArray[2] = parseInt(employee.salary) * (1 + bonusArray[1]);
  bonusArray[3] = Math.round(bonusArray[2]-employee.salary);
  return bonusArray;
}

for (var i = 0; i < employees.length; i++) {
  console.log(bonus(employees[i]));
}
