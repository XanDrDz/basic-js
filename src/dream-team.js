const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = [];
  if (!Array.isArray(members)) {return false}

  for (let el of members) {
    if (typeof el === "string") {
      result.push(el.trim().split('')[0])
    }
  }
  return result.map(function(e) {
   return e.toUpperCase()
}).sort().join('');
};
