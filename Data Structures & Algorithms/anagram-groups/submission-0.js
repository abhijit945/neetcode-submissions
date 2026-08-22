class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sorted = strs.map((m) => [...m].sort().join(""));
        const store = new Map();
        for (let i = 0; i < strs.length; i++) {
            if (store.has(sorted[i])) {
                const current = store.get(sorted[i]);
                store.set(sorted[i], current.concat(strs[i]));
            } else {
                store.set(sorted[i], [strs[i]]);
            }
        }
        console.log([...store].map(([k,v]) => v))
        return [...store].map(([k,v]) => v) 
    }
}
