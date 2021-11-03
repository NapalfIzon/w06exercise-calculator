const chalk = require("chalk");
const {
  sumatory,
  substract,
  multiplication,
  division,
} = require("./operations");

const inputNumbers = process.argv.slice(2);

console.log("Resultados:");
console.log(
  ` ${chalk.red(inputNumbers[0])} + ${chalk.blue(
    inputNumbers[1]
  )} = ${chalk.blue.bgRed.bold(sumatory(inputNumbers[0], inputNumbers[1]))}`
);
console.log(
  ` ${chalk.red(inputNumbers[0])} - ${chalk.blue(
    inputNumbers[1]
  )} = ${chalk.blue.bgRed.bold(substract(inputNumbers[0], inputNumbers[1]))}`
);
console.log(
  ` ${chalk.red(inputNumbers[0])} * ${chalk.blue(
    inputNumbers[1]
  )} = ${chalk.blue.bgRed.bold(
    multiplication(inputNumbers[0], inputNumbers[1])
  )}`
);
console.log(
  ` ${chalk.red(inputNumbers[0])} / ${chalk.blue(
    inputNumbers[1]
  )} = ${chalk.blue.bgRed.bold(division(inputNumbers[0], inputNumbers[1]))}`
);
