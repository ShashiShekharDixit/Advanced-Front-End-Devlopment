function fibonacciInRange(start, end) {
  let a = 0, b = 1;

  console.log(`Fibonacci numbers between ${start} and ${end}:`);

  while (a <= end) {
    if (a >= start) {
      console.log(a);  
    }
    let next = a + b;
    a = b;
    b = next;
  }
}

fibonacciInRange(5, 50);