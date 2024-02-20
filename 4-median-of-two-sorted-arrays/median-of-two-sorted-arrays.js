/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedarr=nums1.concat(nums2);
   const sorted=mergedarr.sort((a,b)=>a-b)
const len=mergedarr.length
    if (len%2!=0){


        const index=len/2
   return sorted[index-.5 ]
    }

else{
  const index=len/2
const first=sorted[index-1];
const second =sorted[index];
console.log(first);
console.log(second);
const sum=first+second;
const avg=sum/2
return avg

}

};