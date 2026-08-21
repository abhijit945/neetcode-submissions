class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numMap = new Map();
        
        for (const i of nums) {
            if (numMap.has(i)) {
                return true;
            }
            numMap.set(i, i);
        }
        return false;
    }
}
