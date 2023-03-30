// Array plus array

function arrayPlusArray(arr1, arr2) {
    let a = 0;
    let b = 0;
     for(let i = 0;i<arr1.length;i++){
       a += arr1[i];
     }
     for(let i = 0;i<arr2.length;i++){
       b += arr2[i];
     }
  return a+b;
}
