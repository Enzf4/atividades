x = [37, 14, 26, 5, 94, 87];

for (i = 0; i < x.length; i++) {
  if (x[i] % 2 == 0 && x[i] < 50) {
    console.log(x[i], "é par e menor que 50");
  } else if (x[i] < 50) {
    console.log(x[i], "é menor que 50");
  } else {
    console.log(x[i], "é maior que 50");
  }
}
