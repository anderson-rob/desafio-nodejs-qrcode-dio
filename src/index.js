import prompt from 'prompt';
import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";
import createQRCode from './services/qr-code/create.js';
import createPassword from './services/password/create.js';

async function main() {
  prompt.start();
  prompt.get(promptSchemaMain, async (err, choose) => {
    if (err) return console.log(err);

    if (choose.select == 1) await createQRCode();
    if (choose.select == 2) await createPassword();
  });
}

main();