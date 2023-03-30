// Sum of positive

function positiveSum(arr) {
    let sum = 0;
     for(let i = 0;i<arr.length;i++){
       if(arr[i]<0){
         sum += 0;
       }else{
         sum += arr[i];
       }
     }
   return sum;
}