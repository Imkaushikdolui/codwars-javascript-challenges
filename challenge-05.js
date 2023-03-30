// Vowel Count

function getCount(str) {
    var count = 0;
    const vowel = ['a','e','i','o','u'];
    for(let i = 0;i<str.length;i++){
    for(let j = 0;j<vowel.length;j++){
    if(str[i] === vowel[j]){
        count++;
      }
     }
    }
    return count;
  }