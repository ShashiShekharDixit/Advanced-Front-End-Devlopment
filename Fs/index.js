let { add, get } = require("./Student");
let { displayStudents } = require("./Display");

add("Shashi", [85, 90, 78,44,54,33]);
add("Shekhar", [92, 88, 95]);
add("Saurabh", [76, 81, 79]);

let allStudents = get();
displayStudents(allStudents);
