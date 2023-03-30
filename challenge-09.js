// Find the smallest integer in the array

class SmallestIntegerFinder {
    findSmallestInt(arr) {
      let smallest;
      for(let i = 0;i<arr.length;i++){
        let num = arr[i] 
        if(i === 0){
          smallest = num;
        }
        if(num<smallest){
          smallest = num;
        }
      }
      return smallest;
    }
  }