/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    // var a = "Hello World!";
    // return {"a":a};
    var toBe = function (val2){
        if(val===val2){
            return {"toBe": true};
        }
        else return {"toBe": "Not Equal"};
    }
};

console.log(expect(5).toBe(5));

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */