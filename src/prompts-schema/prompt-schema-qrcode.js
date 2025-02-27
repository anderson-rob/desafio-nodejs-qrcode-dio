import chalk from "chalk";
import prompt from "prompt";

const promptSchemaQRCode = [
  {
    name: "link",
    decription: chalk.yellow("Digite o link para gerar o QR CODE"),
  },
  {
    name: "type",
    description: chalk.yellow("Escolha entre o tipo (1- NORMAL ou (2- TERMINAL"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha somente entre 1 e 2"),
  },
];

export default promptSchemaQRCode;