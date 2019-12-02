import { r as registerInstance, h } from './core-e8d0ea3b.js';

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Is called on entering dashboard page
     */
    async refresh() {
        this.amount = 0;
        if (this.api && this.api.entries && this.api.entries.length > 0) {
            this.currency = this.api.accounts[0].currency;
            for (const entry of this.api.entries) {
                this.amount += Number(entry.amount);
            }
        }
    }
    render() {
        return h("div", null, "Total amount ", this.amount, " ", this.currency);
    }
    static get style() { return ""; }
};

export { MyComponent as my_component };
