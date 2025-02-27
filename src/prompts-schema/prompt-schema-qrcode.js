import chalk from "chalk";

const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QR CODE"), // corrigido "decription" para "description"
  },
  {
    name: "type",
    description: chalk.yellow("Escolha entre o tipo (1- NORMAL ou 2- TERMINAL)"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha somente entre 1 e 2"),
  },
];

export default promptSchemaQRCode;