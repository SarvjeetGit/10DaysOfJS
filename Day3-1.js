function getSecondLargest(nums) {
    // Complete the function
    var max = Math.max.apply(null, nums);
    while (nums.indexOf(max) > -1) nums.splice(nums.indexOf(max), 1);
    max = Math.max.apply(null, nums);
    return max;
}
