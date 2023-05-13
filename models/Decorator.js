const Decorator = function (paintStock, totalPaintLitres) {
    this.paintStock = paintStock// empty array for paintStock
    this.totalPaintLitres = totalPaintLitres

    this.getTotalPaintLitresInPaintStock();

}

Decorator.prototype.isPaintStockAnArray = function () {
    return Array.isArray(this.paintStock)
}

Decorator.prototype.addPaintCanToPaintStock = function (paintCan) {
    this.paintStock.push(paintCan)
    this.totalPaintLitres += paintCan.numberOfPaintLitres;
}


Decorator.prototype.getTotalPaintLitresInPaintStock = function () {
    let totalLitres = 0;
    this.paintStock.forEach(paintCan => {
        totalLitres += paintCan.numberOfPaintLitres;
    });
    this.totalPaintLitres = totalLitres; // Update the totalPaintLitres property
    return this.totalPaintLitres; // Return the updated totalPaintLitres
};

// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));



// // In TDD check for:

// // That paintStock is a number

// // Decorator.prototype.isPaintStockAnArray = function () {
// //     return Array.isArray(this.paintStock)
// // }

// // // Functions I need to create after doing the tests:

module.exports = Decorator