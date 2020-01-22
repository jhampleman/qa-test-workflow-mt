describe("MathUtils", function() {
    var calc;
 
    //This will be called before running each spec
    beforeEach(function() {
        calc = new MathUtils();
        spyOn(calc, 'sum');
    });
 
    describe("when calc is used to peform basic math operations", function(){
         
        //Spec for sum operation
        it("should be able to calculate sum of 3 and 5", function() {
            calc.sum(3,5);
            //verify it got executed
            expect(calc.sum).toHaveBeenCalled();
            expect(calc.sum).toHaveBeenCalledWith(3,5);
           
            
        });
 
        //Spec for multiply operation
        it("should be able to multiply 10 and 40", function() {
            expect(calc.multiply(10, 40)).toEqual(400);
        });
 
        //Spec for factorial operation for positive number
        it("should be able to calculate factorial of 9", function() {
            expect(calc.factorial(9)).toEqual(362880);
        });
         
        //Spec for factorial operation for negative number
        it("should be able to throw error in factorial operation when the number is negative", function() {
            expect(function() {
                calc.factorial(-7)
            }).toThrowError(Error);
        });
         
    });

    

});

describe("Testing UI with jasmine", function() {
    beforeAll(function() {
      var body = document.getElementsByTagName("body")[0];
      var div = UiFramework.div("div1", "redBg");
      body.appendChild(div);
      div.appendChild(UiFramework.input("input1", false));
      div.appendChild(UiFramework.input("search", true));
      div.appendChild(UiFramework.input("input3", false));
    });
  
    it("focuses the search input field when the page loads", function() {
      expect(document.getElementsByTagName("input")[1].autofocus).toEqual(true);
    });

    it("checks for the background color of the div which contains the input elements", function() {
      expect(window.getComputedStyle(document.getElementById("div1")).backgroundColor).toEqual("rgb(0, 0, 255)");
    });
    
    it("gets Hello! from the div by div ID", function() {
        expect(document.getElementById("mytest").innerHTML).toEqual('Hello!');
      });
});