const Park = function (name, ticketPrice, dinosaurs = []) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaur = function (dinosaur) {
  spliceLoc = this.dinosaurs.indexOf(dinosaur)
  this.dinosaurs.splice(spliceLoc, 1)
  return this.dinosaurs
};

Park.prototype.mostVisitors = function () {
    this.dinosaurs.sort(function(a, b){return a.guestsAttractedPerDay - b.guestsAttractedPerDay})
    this.dinosaurs.reverse()
    return this.dinosaurs[0]
};

Park.prototype.findBySpecies = function (species) {
  
};










module.exports = Park;
