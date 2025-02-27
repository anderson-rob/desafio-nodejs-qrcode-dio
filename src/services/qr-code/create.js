import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

async function createQRCode() {
  prompt.start(); // Mova o start para antes
  prompt.get(promptSchemaQRCode, handle);
}

export default createQRCode;