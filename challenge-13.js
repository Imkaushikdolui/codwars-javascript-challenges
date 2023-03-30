//Remove First and Last Character

function removeChar(str){
    //You got this!
     let a = str.split('');
     a.shift();
     a.pop();
     return a.join('');
       
   };