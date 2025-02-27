// é chamado de Extract Methodo
// verificar quais characteres são permitidos
async function permittedCharacters() {
  let permitted = [];
  if (process.env.UPPERCASE_LETTERS === "true")
    permitted.push(..."ABCDEFGHIJKLMNOPQRSTWXYZ");

  if (process.env.LOWERCASE_LETTERS === "true")
    permitted.push(..."abcdefghijklmnopqrstuvwxyz");
  
  if (process.env.NUMBERS === "true")
    permitted.push(..."0123456789");
  
  if (process.env.SPECIAL_CGARACTERS === "true")
    permitted.push(..."!@#$^&*()-_");
  
  return permitted;
}

export default permittedCharacters;