var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

function bonus (employees) {
	var bonus = 0;
	if(employees[3] == 3) {
		bonus = .04;
	}
	else if(employees[3] == 4) {
		bonus = .06;
	}
	else if(employees[3] == 5) {
		bonus = .1;
	}
	else {
		bonus = 0;
	}
	if(employees[1].length ==4) {
		bonus += .05;
	}
	if(employees[2] > 65000) {
		bonus -= .01;
	}
	if(bonus > .13) {
		bonus = .13;
	}
	return bonus;
}

var oneEmployee = [];
var result = [];

for (var i = 0; i < employees.length; i++) {
	var STI = bonus(employees[i]);
	oneEmployee.push(employees[i][0]);
	oneEmployee.push(STI);
	oneEmployee.push(Math.round((1 + STI) * employees[i][2]));
	oneEmployee.push(Math.round(STI * employees[i][2]));
	console.log(oneEmployee);
	result.push(oneEmployee);
	oneEmployee = [];
}