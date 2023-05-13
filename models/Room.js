const Room = function (areaInSquareMetres, isPainted, isPaintable) {
    this.areaInSquareMetres = areaInSquareMetres
    this.isPainted = false // not painted yet by default
    this.isPaintable = true // is always paintable
}

// I don't think I need to create any functions for this model

// The tests I want to do for this class are:

// check if isPainted is set to false at the start
// check if isPaintable is always set to true 

module.exports = Room