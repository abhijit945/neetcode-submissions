class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            const diffIndex = numMap.get(diff);
            if (diffIndex !== undefined) {
                return [i, diffIndex];
            } else {
                numMap.set(nums[i], i);
            }
        }
        return [];
    }
}
