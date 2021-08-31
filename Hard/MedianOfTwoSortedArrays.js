const findMedianSortedArrays = (nums1, nums2) => {
  // Combine the two arrays given into one array
  let sorted = [...nums1, ...nums2];
  // Sort the newly created array from lowest to highest
  sorted = sorted.sort((a, b) => a - b);

  // Return first value in array if it is the only value in the array
  if (sorted.length === 1) return sorted[0];

  // Create a pointer/index for the middle value in the array
  const middle = sorted[Math.floor(sorted.length / 2)];
  // Create a pointer/index for the middle value in the array to the left
  const middleLeft = sorted[Math.floor((sorted.length / 2) - 1)];

  // If there are an even number of elements in the array, combine both pointers and divide by 2
  if (sorted.length % 2 === 0) {
    return (middle + middleLeft) / 2;
  } else {
  // Just return the middle index if its an uneven array
    return middle;
  }
};
