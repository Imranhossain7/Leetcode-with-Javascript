var decompressRLElist = function (nums) {
  const res = [];

  for (let i = 0; i < nums.length; i += 2) {
    res.push(...Array(nums[i]).fill(nums[i + 1]));
  }

  return res;
};
