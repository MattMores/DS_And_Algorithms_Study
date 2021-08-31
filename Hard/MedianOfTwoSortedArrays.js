const findMedianSortedArrays = (nums1, nums2) => {
  let sorted = [...nums1, ...nums2];
  sorted = sorted.sort((a, b) => a - b);

  if (sorted.length === 1) return sorted[0];

  const middle = sorted[Math.floor(sorted.length / 2)];
  const middleLeft = sorted[Math.floor(sorted.length / 2 - 1)];

  if (sorted.length % 2 === 0) {
    return (middle + middleLeft) / 2;
  } else {
    return middle;
  }
};
