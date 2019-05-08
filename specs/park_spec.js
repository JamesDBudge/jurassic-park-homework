const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dino1 = new Dinosaur('T-Rex', 'Carnivore', 5000)
    dino2 = new Dinosaur('Apatosaur', 'Carnivore', 3500)
    dino3 = new Dinosaur('Apatosaur', 'Herbivore', 3000)
    dino4 = new Dinosaur('Velociraptor', 'Carnivore', 6500)
    dino5 = new Dinosaur('Clever Girl', 'Omnivore', 1500)
    dino6 = new Dinosaur('Stegosaurus', 'Herbivore', 4000)

    park = new Park('Jurassic Park', 50, [dino1, dino2, dino3, dino4])
  })

  it('should have a name', function(){
    actual = park.name
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    actual = park.ticketPrice
    assert.strictEqual(actual, 50)
  });

  it('should have a collection of dinosaurs', function(){
    actual = park.dinosaurs
    assert.deepStrictEqual(actual, [dino1, dino2, dino3, dino4])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dino5)
    actual = park.dinosaurs
    assert.deepStrictEqual(actual, [dino1, dino2, dino3, dino4, dino5])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dino4)
    actual = park.dinosaurs
    assert.deepStrictEqual(actual, [dino1, dino2, dino3])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    actual = park.mostVisitors()
    assert.strictEqual(actual, dino4)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    actual = park.findBySpecies('Apatosaur')
    assert.deepStrictEqual(actual, [dino2, dino3])
  });

  it('should be able to remove all dinosaurs of a particular species');

});
