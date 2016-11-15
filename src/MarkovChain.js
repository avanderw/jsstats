function MarkovChain(order) {
    this.order = order;
    this.prior = [];
    this.graph = {};
}

MarkovChain.prototype = {
    constructor: MarkovChain,
    updatePrior: function (value) {
        this.prior.shift();
        this.prior.push(value);
    },
    start: function () {
        this.prior.slice(0);
        for (var i = 0; i < order; i++)
            this.prior.push("SOURCE");
    },
    addValue: function (value) {
        if (!(this.prior in this.graph))
            this.graph[this.prior] = new Frequency();
        
        this.graph[this.prior].addValue(value);
        this.updatePrior(value);
    },
    end: function () {
        this.addValue("SINK");
    },
    walk: function () {
        var walk = this.getFrequency().getSample();
        this.updatePrior(walk);
        return walk;
    },
    getPriors: function () {
        return Object.keys(this.graph);
    },
    getFrequency: function (prior) {
        if (prior === undefined) 
            return this.graph[this.prior];
        
        return this.graph[prior];
    }
};