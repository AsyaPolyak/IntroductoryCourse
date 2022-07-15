function renderTextInFrame(text) {
    let temp ="";
    let result = '*';
    t = (text.length - 1) + 8;//довжина строчки 
  
    for(let j = 0; j <= t ;j +=1) {
      temp = "".concat(temp,'*');
    }
    console.log(temp);
    if(text.length) { 
     res = result +"   " + text + "   "+result; 
    }
    //console.log(temp.repeat(1));
    //result = text; // заміни власним кодом
    //console.log(temp.repeat());
    res = temp.repeat(1);
    console.log(temp.repeat(1));
    //result= temp + res + temp_repeat;
    return result;
    
  
  } 
  console.log(renderTextInFrame('Hello World'));
  