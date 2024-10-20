module.exports = function check(str, bracketsConfig) {
  let openElements = []
  let openElement = ''
  let strElement = ''
  str = str.split('');
  if (str.length % 2 != 0) { return false }
  for (let i = 0; i < str.length; i = i + 1) {
    strElement = str[i];
    if (bracketsConfig.some((elem) => elem[0] == str[i] && elem[1] == str[i])) {
      if (openElements.includes(str[i])) {
        console.log('содержится');
        if (openElements.pop() == str[i]) { console.log(openElements) }
        else { return false }
      } else { console.log('не содержится'); openElements.push(str[i]) }
    } else {
      if (bracketsConfig.some((elem) => elem[0] == str[i])) { openElements.push(str[i]) }
      else {
        for (let i = 0; i < bracketsConfig.length; i = i + 1) { if (bracketsConfig[i].includes(strElement)) { openElement = bracketsConfig[i][0] } else { } };
        if (openElements.pop() == openElement) { } else { return false }
      };
    };
  }
  return true
}
