class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const parsed = s.match(/[a-zA-Z0-9]/g);
        if (!parsed) {
            return true;
        }
        let i = 0;
        let j = parsed.length - 1;
        while (i < j) {
            if (parsed[i].toLowerCase() !== parsed[j].toLowerCase()) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
