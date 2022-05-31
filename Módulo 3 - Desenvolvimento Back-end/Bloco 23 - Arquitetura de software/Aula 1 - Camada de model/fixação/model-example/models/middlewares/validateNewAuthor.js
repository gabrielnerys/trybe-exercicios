const newAuthorValidate = (firstName, middleName, lastName, birthday, nationality) => {
  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  
  if(!firstName || typeof firstName !== "string") return false;
  if(!lastName || typeof lastName !== "string") return false;
  if(middleName && typeof firstName !== "string") return false;
  if(!dateRegex.test(birthday)) return false;
  if(!nationality || typeof nationality !== "string") return false;

  return true;
}

module.exports = newAuthorValidate;