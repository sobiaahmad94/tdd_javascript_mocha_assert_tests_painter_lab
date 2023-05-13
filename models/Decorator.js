const Decorator = function (paintStock) {
    this.paintStock = paintStock
    this.totalPaintLitres = 0
}

Decorator.prototype.isPaintStockAnArray = function () {
    return Array.isArray(this.paintStock)
}

Decorator.prototype.addPaintCanToPaintStock = function (paintCan) {
    this.paintStock.push(paintCan)
    this.totalPaintLitres += paintCan.numberOfPaintLitres
}

Decorator.prototype.getTotalPaintLitresInPaintStock = function () {
    let totalLitres = 0
    this.paintStock.forEach((paintCan) => {
    totalLitres += paintCan.numberOfPaintLitres
    })
    return totalLitres
}  
// Decorator.prototype.getTotalPaintLitresInPaintStock = function () {
//     this.totalPaintLitres = 0; // Reset totalPaintLitres property
//     this.paintStock.forEach(paintCan => {
//         this.totalPaintLitres += paintCan.numberOfPaintLitres;
//     });
//     return this.totalPaintLitres;
// };

// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));



// // In TDD check for:

// // That paintStock an array


// // // Functions I need to create after doing the tests:

module.exports = Decorator