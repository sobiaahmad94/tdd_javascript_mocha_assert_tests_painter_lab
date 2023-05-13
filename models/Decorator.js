const Decorator = function (paintStock) {
    this.paintStock = [] // empty array for paintStock
}

// In TDD check for:

// That paintStock is an array

Decorator.prototype.isPaintStockAnArray = function () {
    return Array.isArray(this.paintStock)
}


// Functions I need to create after doing the tests:

// addPaintCanToPaintStock()

// getTotalPaintLitresInPaintStock()

// paintRoomIfEnoughPaintStock()

module.exports = Decorator
