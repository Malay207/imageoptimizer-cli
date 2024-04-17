import chalk from "chalk";

export function version(){
  const ver=require("../package.json");
  console.log(chalk.greenBright(`v${ver.version}`));
}