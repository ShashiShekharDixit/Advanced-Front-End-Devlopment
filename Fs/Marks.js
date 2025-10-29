function Total(marks) {
  let Sum = 0;
  for (let i = 0; i < marks.length; i++) {
    Sum += marks[i];
  }

  return Sum;
}

function Average(marks) {
  return Total(marks) / marks.length;
}

module.exports = { Total, Average };
