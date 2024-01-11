/* Your Code Here */

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  let obj = {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  };
  return obj;
}

function createEmployeeRecords(array) {
  let employeeRecords = array.map(createEmployeeRecord);
  return employeeRecords;
}

function createTimeInEvent(date) {
  let time = date.split(" ");
  const timeInEvent = {
    type: "TimeIn",
    date: time[0],
    hour: parseInt(time[1], 10),
  };
  this.timeInEvents.push(timeInEvent);
  return this;
}

function createTimeOutEvent(date) {
  let time = date.split(" ");
  const timeOutEvent = {
    type: "TimeOut",
    date: time[0],
    hour: parseInt(time[1], 10),
  };
  this.timeOutEvents.push(timeOutEvent);
  return this;
}

function hoursWorkedOnDate(date) {
  let timeInEvent = this.timeInEvents.find((event) => event.date === date);
  let timeOutEvent = this.timeOutEvents.find((event) => event.date === date);
  let hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
  return Math.round(hoursWorked);
}

function wagesEarnedOnDate(date) {
  let wages = hoursWorkedOnDate.call(this, date) * this.payPerHour;
  return parseFloat(wages.toString());
}
function findEmployeeByFirstName(collection, firstNameString) {
  return collection.find(function (employee) {
    return employee.firstName === firstNameString;
  });
}

function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce(function (totalPayroll, employeeRecord) {
    return totalPayroll + allWagesFor.call(employeeRecord);
  }, 0);
}
//    function wagearnedOnDate(employeeRecord, date) {}

//    function allWagesFor(employeeRecord) {}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
