MathUtils = function() {};
 
MathUtils.prototype.sum = function(number1, number2) {
        return number1 + number2;
}
 
MathUtils.prototype.substract = function(number1, number2) {
    return number1 - number2;
}
 
MathUtils.prototype.multiply = function(number1, number2) {
    return number1 * number2;
}
 
MathUtils.prototype.divide = function(number1, number2) {
    return number1 / number2;
}
 
MathUtils.prototype.average = function(number1, number2) {
    return (number1 + number2) / 2;
}
 
MathUtils.prototype.factorial = function(number) {
    if (number < 0) {
        throw new Error("There is no factorial for negative numbers");
    } else if (number == 1 || number == 0) {
        return 1;
    } else {
        return number * this.factorial(number - 1);
    }
}

var UiFramework = (function() {
    function input(name, isAutoFocused) {
      var element = document.createElement("input");
      element.name = name;
      element.autofocus = isAutoFocused;
      return element;
    }

    function div(id, cssClass) {
      var element = document.createElement("div");
      element.id = id;
      element.classList.add(cssClass);
      return element;
    }

    return {
      input: input,
      div: div
    }
  })();