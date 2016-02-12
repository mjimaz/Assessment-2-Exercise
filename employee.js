var Employee = function(name, department) {
  this.name = "Faithful servant " + name;
  this.department = department || "everywhere";
  this.hours = 0;
}

Employee.prototype.work = function(hours) {
  this.hours += hours;
}

Employee.prototype.getPaid = function(){
  return 10000000;
}

var Manager = function(name, department, salary) {
  Employee.call(this, name, department);
  this.salary = salary;
  this.reports = [];
  this.overtime = false;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.work = function(hours, project) {
  Employee.prototype.work.call(this, hours);
  if(this.hours > 40){
    this.overtime = true;
  }
}

Manager.prototype.addEmployee = function(employee) {
  if(employee instanceof Employee){
    this.reports.push(employee);
    return this.reports;
  } else {
    console.log(employee, "isn't an employee!");
    return undefined;
  }
}


// README - Please write tests to show that Manager is properly subclassed
// from Employee in the pseudoclassical pattern and answer the 
// question below. 
// "Properly subclassed" in this case means: write tests to show that 
// the .call, the Object.create, and prototype.constructor are all working.

//Console.log test(s) that show that line 16 is working: 



//Console.log test(s) that show that line 22 is working:



//Console.log test(s) that show that line 23 is working: 



//What's happening on line 26? Why can't we just do this.work(hours)?

