const assert = require('assert')
const Decorator = require('../models/Decorator.js')
const Paint = require('../models/Paint.js')

// Mocha functions describe() and it():

// describe() - used to label a group of tests that are testing for the same model
// it() - description of an individual test for that model, kinda a string then function, then the assert test method thing

// ARRANGE
// ACT
// ASSERT

describe('Decorator', function () {
    let decorator;

    let paintCan1;
    let paintCan2;
    let paintCan3;

    



    beforeEach(function () {
        decorator = new Decorator([], 0);

        paintCan1 = new Paint(10);
        paintCan2 = new Paint(20);
        paintCan3 = new Paint(30)

        // grabbing decorator object and running addPaintCanToPaintStock function and passing in the instance of paint as an argument
        decorator.addPaintCanToPaintStock(paintCan1);
        decorator.addPaintCanToPaintStock(paintCan2);
        decorator.addPaintCanToPaintStock(paintCan3);


    })

    it('paintStock property should be an array', function () {
        const actual = Array.isArray(decorator.paintStock);
        assert.strictEqual(actual, true);
    })

    it('should be able to add paint can to paint stock (paintStock)', function () {
        const actual = decorator.paintStock.length;
        assert.strictEqual(actual, 3);
    })

    it('should be able to get total paint litres (totalPaintLitres) in paint stock (paintStock)', function () {
        const actual = decorator.getTotalPaintLitresInPaintStock();
        assert.strictEqual(actual, 60)
    })



})

