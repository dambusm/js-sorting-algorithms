// Selection sort
// Works by dividing the array into sorted (left) and unsorted (right) subarrays.
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
// Works by stepping through the whole array, comparing two elements and swapping them if they are in the wrong order.
// This process repeats, passing over the whole array, until a pass completes where no swaps occurred, indicating the array is sorted.

function bubbleSort(array) {
  do {
    // Declare a boolean to hold whether or not a swap has occurred on a pass
    var swapped = false;
    // Loop over the entire array length.
    for (var i = 0; i < array.length; i++) {
      // Check if the current pair are out of order
      if (array[i - 1] > array[i]) {
        // Swap the pair
        var temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
        // Set the boolean to indicate a swap has occurred.
        swapped = true;
      }
    }
    // Repeat process until the swapped boolean is false
  } while (swapped);
  // Return the array
  return array;
}

// Insertion sort
// Works by dividing the array into sorted (left) and unsorted (right) subarrays.
// Takes the first element of the unsorted subarray, then steps through the sorted array to find where that element should exist.
// Then splices that element in to that position.

function insertionSort(array) {
  // Iterate over the length of the array, starting at the second element (the first element of the unsorted subarray).
  for (var i = 1; i < array.length; i++) {
    // Iterate over the sorted subarray
    for (var j = 0; j < i; j++) {
      // When find an element in the sorted subarray that is greater than the element you're comparing from the unsorted subarray, insert the element to the left of it.
      if (array[i] < array[j]) {
        var temp = array.splice(i, 1);
        array.splice(j, 0, temp[0]);
      }
      // If no elements are found that are greater than the comparison element, do nothing, leaving the comparison element at the end of the sorted subarray.
    }
  }
  // Return the array
  return array;
}
