// Selection sort

function selectionSort(array) {
  for (var i = 0; i < array.length - 1; i++) {
    var min = i;
    for (var j = i + 1; j < array.length; j++)
      if (array[j] < array[min]) {
        min = j;
      }
    var temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

// Bubble sort

function bubbleSort(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (array[j - 1] > array[j]) {
        var temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
