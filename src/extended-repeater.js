const CustomError = require("../extensions/custom-error");
  
module.exports = function repeater(str, options) {
    let addString = String(str);
    let result = "";
  
    if (options.hasOwnProperty("addition")) {
      addString += String(options.addition);
    }
  
    if (options.hasOwnProperty("additionRepeatTimes")) {
      for (let i = 1; i < options.additionRepeatTimes; i++) {
        addString += (options.additionSeparator || "|") + options.addition;
      }
    }
  
    if (options.hasOwnProperty("repeatTimes")) {
      for (let i = 1; i < options.repeatTimes; i++) {
        result += addString + (options.separator || "+");
      }
      result += addString;
    } else {
      result = addString;
    }
    return result;
  };