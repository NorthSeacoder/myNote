function zeros(n) {
  let num = 0
  do {
    n = Number.parseInt(n / 5);
    num += n
  } while (n > 0)
  return num
}


console.log(zeros(2499))