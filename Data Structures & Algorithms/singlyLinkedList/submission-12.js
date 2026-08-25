class LinkedList {
    constructor() {
        this.head = {
            val: null,
            next: null,
        };
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let i = 0;
        let node = this.head;
        if (!node.next && !node.val) {
            return -1;
        }
        while (node !== null) {
            if (index === i) {
                return node.val;
            }
            i++;
            node = node.next;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let node = this.head;
        if (!node.next && !node.val) {
            this.head = { val, next: null };
        } else {
            this.head = { val, next: node };
        }
        console.log("head", this.getValues());
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let node = this.head;
        if (!node.next && !node.val) {
            this.head = { val, next: null };
        } else {
            while (node.next !== null) {
                node = node.next;
            }
            node.next = { val, next: null };
        }
        console.log("tail", this.getValues());
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let prev = null;
        let curr = this.head;
        let i = 0;
        if (!curr.next && !curr.val) {
            return false;
        }
        while (curr !== null) {
            if (index === 0) {
                this.head = curr.next;
                return true;
            }
            if (i === index) {
                prev.next = curr.next;
                return true;
            }
            i++;
            prev = curr;
            curr = curr.next;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let vals = [];
        let node = this.head;
        while (node !== null) {
            vals.push(node.val);
            node = node.next;
        }
        return vals;
    }
}
