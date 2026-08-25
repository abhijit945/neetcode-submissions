class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.size = 0;
        this.capacity = capacity;
        this.list = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.list[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.list[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.size === this.capacity) {
            this.resize();
        }
        this.list[this.size] = n;
        ++this.size;
    }

    /**
     * @returns {number}
     */
    popback() {
        const item = this.list[this.size - 1];
        --this.size;
        this.list.length = this.size;
        return item;
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity *= 2;
        const store = new Array(this.capacity);
        for (let i = 0; i < this.size; i++) {
            store[i] = this.list[i];
        }
        this.list = store;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
