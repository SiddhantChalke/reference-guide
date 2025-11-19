class Shelter{
    constructor(roof, amenities){
        this.roof = roof;
        this.amenities = amenities;
    }
    getInfo(){
        return (`This shelter has ${this.roof} and ${this.amenities}.`)
    }
}
const house = new Shelter('slab', 'water supply')
// console.log(house.getInfo())

class Pain{
    severity;
    location;
    history;
    getInfo(){
        return (`The ${severity} severe pain at ${location} with ${history}.`)
    }
    setHist(newhistory){
        this.history = newhistory;
    }
}
const headache = new Pain('Mild', 'right', 'past history');
console.log(headache.getInfo());