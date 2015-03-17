function bubbleSort(arr){
  var i = 0;
  var currentLength = arr.length;
  for (i; i < arr.length; i++) {
    var swapCounter = 0;
    var j = 0;
    var k = 1;
    for (j; j < currentLength - 1; j++) {
      var jelement = arr[j];
      if (arr[j] > arr[k]) {
        arr[j] = arr[k];
        arr[k] = jelement;
        swapCounter++;
      }
      k++;
      }
      currentLength--;
      if (swapCounter === 0) {
        return arr;
    }
  i++;
  }
  return arr;
}

// do not touch this
module.exports = bubbleSort;

