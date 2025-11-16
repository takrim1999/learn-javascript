/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    // var a = "Hello World!";
    // return {"a":a};
    toBe : function (val2){
        return val === val2;
    }

};

console.log(expect(5).toBe(5));

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */