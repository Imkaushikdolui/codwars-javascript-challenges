// Get the mean of an array

function getAverage(arr){
    let sum = 0;
     for(let i = 0;i<arr.length;i++){
       sum += arr[i];
     }
     let a = sum / arr.length;
     let b = parseInt(a);
   return b;
 }