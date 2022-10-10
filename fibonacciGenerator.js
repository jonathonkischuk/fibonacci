
// create a function to generate our array, taking a number (n) as an input, representing the desired length of our final array.
function fibonacciGenerator (n) {

    // create variables to control our place and an array for our output
    var num1 = 0;
    var num2 = 1;
    var array = [];
    
    
    // check if the length desired is 1 or 2 before proceeding
    if (n === 1) {
        return [0];
    }
    else if (n === 2) {
        return [0, 1];
    }
    // uses a while loop to add another number (sum of previous 2 numbers)
    // increments our two placeholders
    else {
        array = [0, 1];
        while (array.length < n) {
            array.push(array[num1] + array[num2]);
            num1++;
            num2++;
        }
        // return our final array of an appropriate length
        return array;
    }
    
    
    // test 1:
  
  fibonacciGenerator(2);      // outputs: [0, 1]
  
  // test 2:
  
  fibonacciGenerator(4);      // outputs: [0, 1, 1, 2]
  
  
    
