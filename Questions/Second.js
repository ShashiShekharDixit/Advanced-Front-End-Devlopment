function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function thirdHighestPrime(start, end) {
  let primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  if (primes.length < 3) {
    console.log("Not enough prime numbers in the range.");
    return;
  }

  primes.sort((a, b) => b - a); 
  console.log("Third highest prime:", primes[2]);
}

thirdHighestPrime(10, 50);