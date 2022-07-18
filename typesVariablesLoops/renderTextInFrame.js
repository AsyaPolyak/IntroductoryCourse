//РОБІТЬ САМІ!!!!//
function renderTextInFrame(text) {
  let temp = "";
  let result = '';
  let asterisk = '*';
  let res;
  let temp2;
  t = (text.length - 1) + 8;//довжина строчки
 
  for (let j = 0; j <= t; j += 1) {
   temp = "".concat(temp, '*');
  }
  for (let j = 0; j <= t; j += 1) {
   temp2 = "*" + " ".repeat(t-1) + "*";
  }
  if (text.length) {
   res = asterisk + "   " + text + "   " + asterisk;
  }
  result += temp;
  result += "\n";
  result += temp2;
  result += "\n";
  result += res;
  result += "\n";
  result += temp2;
  result += "\n";
  result += temp;
  return result;
 
 }
 
 console.log(renderTextInFrame('Hello World'));
