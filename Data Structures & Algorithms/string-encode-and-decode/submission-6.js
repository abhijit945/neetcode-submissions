class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (!strs || strs.length === 0) {
            return "";
        }
        return strs
            .map((str) => {
                if (!str) {
                    return " ";
                }
                const item = [...str];
                const first = item.shift();
                item.push(first);
                return item.join("");
            })
            .join("!!!@@@");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) {
            return [];
        }
        const splitItems = str.split("!!!@@@");
        return splitItems.map((s) => {
            if (s === " ") {
                return "";
            }
            const item = [...s];
            const last = item.pop();
            item.unshift(last);
            return item.join("");
        });
    }
}
