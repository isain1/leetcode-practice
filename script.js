// 03-06-2023

// #1 Two Sum:

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//function
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (((nums[i] + nums[j]) == target) && (i != j)) {
                return [i, j];
            };
        };
    };
};

//Test
let arr1 = [2, 5, 11, 6, 8];
let arr2 = [3, 20, 4, 18, 23, 7];
let arr3 = [3, 5, 7, 9, 8, 1];

console.log(twoSum(arr1, 17));
console.log(twoSum(arr2, 23));
console.log(twoSum(arr3, 9));
