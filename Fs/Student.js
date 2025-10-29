let Student = [];

function add(name, marks) {
  let student = { name: name, marks: marks };
  Student.push(student);
}

function get() {
  return Student;
}

module.exports = { add, get };
