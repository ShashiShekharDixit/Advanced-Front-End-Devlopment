let { Total, Average } = require("./Marks");

function displayStudents(students) {
  students.forEach((student, index) => {
    const total = Total(student.marks);
    const avg = Average(student.marks);

    console.log(index + 1);
    console.log(student.name);
    console.log(student.marks.join(", "));
    console.log(total);
    console.log(avg);
  });
  console.log("\n");
}

module.exports = { displayStudents };
