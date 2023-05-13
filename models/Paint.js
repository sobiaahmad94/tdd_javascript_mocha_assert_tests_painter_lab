const Paint = function (numberOfPaintLitres) {
    this.numberOfPaintLitres = numberOfPaintLitres
}

// ' this ' just refers to Paint eh

// note given: one litre of paint covers one square metre
// I could make it that one paint can is one litre

// some tests I could do:

// check if the numberOfPaintsLitres property is an array - function
Paint.prototype.isNumberOfPaintsLitresArray = function () {
    return Array.isArray(this.numberOfPaintLitres)
}
// functions I need to create here after doing the tests:

// checkIfPaintEmpty()
// checkIfPaintsLitresEmpty() is more descriptive
// compares numberOfPaintsLitres length to 0, if the length is 0 then it's empty
Paint.prototype.checkIfPaintsLitresIsEmpty = function () {
    return this.numberOfPaintLitres.length === 0
}

// emptyAllPaint()
// emptyAllPaintLitres() is a wee bit more descriptive
// if numberOfPaintsLitres isn't 0 or empty [] then set to empty
Paint.prototype.emptyAllPaintsLitres = function () {
    this.numberOfPaintLitres = []
}

// paintOne = new Paint([])
// console.log(paintOne.isNumberOfPaintsLitresArray()) // true, woop

module.exports = Paint