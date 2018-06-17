// Selection sort
// Selection sort works by dividing the array into sorted (left) and unsorted (right) subarrays.
// It looks through the entire unsorted subarray and finds the lowest value.
// It takes this lowest value and inserts it at the end of the sorted subarray.

function selectionSort(array) {
  // Iterate over the array. We only need to loop until array.length -1, because we are doing pairwise comparisons, comparing array[i] to array[i+1].
  // If we iterated until array.length, we would be comparing the final element with a non-existent element array[i+1].
  for (var i = 0; i < array.length - 1; i++) {
    // Create a variable to point to the lowest value element in the unsorted subarray, and initialise it with the leftmost element.
    var min = i;
    // Iterate over the entire unsorted subarray
    for (var j = i + 1; j < array.length; j++) {
      // Check if the variable pointing to the lowest value element is still the lowest. If not, point to the new lowest element.
      if (array[j] < array[min]) {
        min = j;
      }
    }
    // Swap the leftmost element of the unsorted subarray with the lowest value element found in the unsorted subarray.
    var temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  // Return the sorted array
  return array;
}

// Bubble sort

function bubbleSort(array) {
  do {
    var swapped = false;
    for (var i = array.length - 1; i >= 0; i--) {
      for (var j = 1; j <= i; j++) {
        if (array[j - 1] > array[j]) {
          var temp = array[j - 1];
          array[j - 1] = array[j];
          array[j] = temp;
          swapped = true;
        }
      }
    }
  } while (swapped);
  return array;
}
