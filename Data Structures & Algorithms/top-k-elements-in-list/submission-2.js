class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const fMap = new Map();
        if (!k || !nums || nums.length === 0) {
            return [];
        }
        nums.forEach((i) => {
            if (fMap.has(i)) {
                let inc = fMap.get(i);
                fMap.set(i, ++inc);
            } else {
                fMap.set(i, 1);
            }
        });
        // We are going to return top k most frequent items
        // and not items that are repeating more than k

        const entries = [...fMap.entries()].sort(([keyA, valA], [keyB, valB]) =>
            valA > valB ? -1 : 0,
        );

        return entries.slice(0, k).map(([key]) => key);
    }
}
