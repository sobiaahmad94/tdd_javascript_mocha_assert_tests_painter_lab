const assert = require('assert')
const Decorator = require('../models/Decorator.js')

// Mocha functions describe() and it():

// describe() - used to label a group of tests that are testing for the same model
// it() - description of an individual test for that model, kinda a string then function, then the assert test method thing

// ARRANGE
// ACT
// ASSERT

describe('Decorator', function () {
    let decorator;

    this.beforeEach(function () {
        decorator = new Decorator([])
    })
    
    it('paintStock property should be an array', function () {
    const actual = Array.isArray(decorator.paintStock)
    assert.deepStrictEqual(actual, true)
    })
    
})



// const Decorator = function (paintStock) {
//     this.paintStock = [] // empty array for paintStock