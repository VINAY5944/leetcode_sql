/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const middle=Math.ceil(nums.length/2)
console.log(middle)
if(middle==1){
    return nums[0]
}

    return nums.sort((a,b)=>a-b)[middle-1]
 
};