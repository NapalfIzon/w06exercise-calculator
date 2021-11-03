const chalk = require("chalk");
const prompt = require("prompt");
const {
  sumatory,
  substract,
  multiplication,
  division,
} = require("./operations");

const inputNumbers = process.argv.slice(2);

const showResults = () => {
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
};

prompt.start();

if (Number.isNaN(+inputNumbers[0]) || Number.isNaN(+inputNumbers[1])) {
  if (inputNumbers[0] === undefined || inputNumbers[1] === undefined) {
    prompt.get(["firstPromptNumber", "secondPromptNumber"], (err, value) => {
      inputNumbers[0] = value.firstPromptNumber;
      inputNumbers[1] = value.secondPromptNumber;
      showResults();
    });
  } else {
    console.log("Bad type of values  ₍ᐢ`🐽´ᐢ₎");
    process.exit(0);
  }
} else {
  showResults();
}
