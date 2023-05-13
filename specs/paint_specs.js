const assert = require('assert')
const Paint = require('../models/Paint.js')

// Mocha functions describe() and it():

// describe() - used to label a group of tests that are testing for the same model
// it() - description of an individual test for that model, kinda a string then function, then the assert test method thing

// ARRANGE
// ACT
// ASSERT

describe('Paint', function(){
    let paint;

    this.beforeEach(function() {
        paint = new Paint([])
    })

    it('numberOfPaintLitres property should be an array', function () {
        const actual = Array.isArray(paint.numberOfPaintLitres)
        assert.deepStrictEqual(actual, true) 
    })

    it('paint (numberOfPaintLitres) should be empty', function () {
        const actual = paint.numberOfPaintLitres
        assert.deepStrictEqual(actual, [])
    })

    it('should have a way to empty out all paint (numberOfPaintLitres)', function () {
        const actual = paint.numberOfPaintLitres
        assert.deepStrictEqual(actual, [])
    })


})







// const Paint = function (numberOfPaintLitres) {
//     this.numberOfPaintLitres = []
// }

// note given: one litre of paint covers one square metre

// some tests I could do:

// check there is a numberOfPaintsLitres property

// functions I need to create here after doing the tests:

// checkIfPaintEmpty()

// emptyAllPaint()

