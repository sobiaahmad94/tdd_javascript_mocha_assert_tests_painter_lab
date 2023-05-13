const Decorator = function (paintStock, totalPaintLitres) {
    this.paintStock = [] // empty array for paintStock
    this.totalPaintLitres = 0
}

// In TDD check for:

// That paintStock is a number

Decorator.prototype.isPaintStockAnArray = function () {
    return Array.isArray(this.paintStock)
}

// Functions I need to create after doing the tests:

// addPaintCanToPaintStock()
Decorator.prototype.addPaintCanToPaintStock = function (paintCan) {
    this.paintStock.push(paintCan)
}


// getTotalPaintLitresInPaintStock()

// paintRoomIfEnoughPaintStock()

module.exports = Decorator
