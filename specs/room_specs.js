const assert = require('assert')
const Room = require('../models/Room.js')

// Mocha functions describe() and it():

// describe() - used to label a group of tests that are testing for the same model
// it() - description of an individual test for that model, kinda a string then function, then the assert test method thing

// ARRANGE
// ACT
// ASSERT

describe('Room', function(){
    let room;

    beforeEach(function() {
        room = new Room(20, false, true)
    })

    it('isPainted property should be initially set to false', function () {
        const actual = room.isPainted
        assert.deepEqual(actual, false)
    })

    it('isPaintable property should be initially set to true', function () {
        const actual = room.isPaintable
        assert.deepEqual(actual, true)
    })

})

// model notes :)
// const Room = function (areaInSquareMetres, isPainted, isPaintable) {
//     this.areaInSquareMetres = areaInSquareMetres
//     this.isPainted = false // not painted yet by default
//     this.isPaintable = true // is always paintable
// }

// check if isPainted is set to false at the start
// check if isPaintable is always set to true 
