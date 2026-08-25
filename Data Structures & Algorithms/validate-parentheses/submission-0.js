class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = { "]": "[", ")": "(", "}": "{" };
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            if (!Object.hasOwn(pairs, s[i])) {
                stack.push(s[i]);
            } else {
                if (stack[stack.length - 1] !== pairs[s[i]]) {
                    return false;
                } else {
                    stack.pop();
                }
            }
        }
        if (stack.length === 0) {
            return true;
        }
        return false;
    }
}
