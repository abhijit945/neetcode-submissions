class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sMap = new Map();
        const tMap = new Map();
        if (s.length !== t.length) return false;
        for (const i of s) {
            if (sMap.has(i)) {
                let inc = sMap.get(i);
                sMap.set(i, ++inc);
            } else {
                sMap.set(i, 1);
            }
        }
        for (const j of t) {
            if (!sMap.has(j) || sMap.get(j) <= tMap.get(j)) {
                return false;
            }
            if (tMap.has(j)) {
                let inc = tMap.get(j);
                tMap.set(j, ++inc);
            } else {
                tMap.set(j, 1);
            }
        }

        return true;
    }
}
