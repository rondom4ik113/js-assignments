'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
    if ((num % 3 == 0) && (num % 5 == 0)) {
        return 'FizzBuzz';
    } else if (num % 5 == 0) {
        return 'Buzz';
    } else if (num % 3 == 0) {
        return 'Fizz';
    } else {
        return num;
    }
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
    if (n == 0) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }    
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
    let sum = 0;
    for (let i = n1; i <= n2; i++) {
        sum += i;
    }
    return sum;
}


/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a,b,c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object 
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 * 
 *  (5;5)
 *     -------------  
 *     |           | 
 *     |           |  height = 10
 *     ------------- 
 *        width=20    
 * 
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 * 
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 * 
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *  
 */
function doRectanglesOverlap(rect1, rect2) {
    if (((rect1.top + rect1.height) < rect2.top)
        || ((rect2.top + rect2.height) < rect1.top)
        || ((rect1.left + rect1.width) < rect2.left)
        || ((rect2.left + rect2.width) < rect1.left)) {
        return false; // not overlap
    } else {
        return true;
    }
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of 
 *  {
 *     center: {
 *       x: 5,       
 *       y: 5
 *     },        
 *     radius: 20
 *  }
 * 
 * Point is object of 
 *  {
 *     x: 5,
 *     y: 5
 *  }
 * 
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *   
 */
function isInsideCircle(circle, point) {
    return Math.sqrt(Math.pow(point.x - circle.center.x, 2) + Math.pow(point.y - circle.center.y, 2)) < circle.radius;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
    let char = null;

    let i = 0;
    while ((i <= str.length) && (char === null)) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            char = str[i];
        }
        i++;
    }

    return char;
}


/**
 * Returns the string representation of math interval, specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    
    let resultString = isStartIncluded ? "[" : "(";
    resultString += start + ", " + end;
    resultString += isEndIncluded ? "]" : ")";

    return resultString;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
    let revStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }

    return revStr;
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
    let numStr = num.toString();
    let revNumStr = reverseString(numStr);
    return Number(revNumStr);
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
    let ccnStr = ccn.toString();
    let sum = 0;
    let nDigits = ccnStr.length;
    let parity = nDigits % 2;

    for(let i = 0; i < nDigits; i++) {
        let digit = Number.parseInt(ccnStr[i]);
        if (i % 2 === parity) {
            digit *= 2;
        }
        if (digit > 9) {
            digit -= 9;
        }
        sum += digit;
    }

    return sum % 10 === 0;
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
    let numStr = num.toString();
    let sumOfDigits = 0;
    do {    
        sumOfDigits = 0;
        for (let i = 0; i < numStr.length; i++) {
            sumOfDigits += Number.parseInt(numStr[i]);
        }
        numStr = sumOfDigits.toString();
    } while (sumOfDigits > 9)

    return sumOfDigits;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true 
 */
function isBracketsBalanced(str) {
    const brType1 = '[]';
    const brType2 = '()';
    const brType3 = '{}';
    const brType4 = '<>';

    let strCopy = String(str);

    while (strCopy.includes(brType1) || strCopy.includes(brType2) || strCopy.includes(brType3) || strCopy.includes(brType4)) {
        strCopy = strCopy.replace(brType1, '');
        strCopy = strCopy.replace(brType2, '');
        strCopy = strCopy.replace(brType3, '');
        strCopy = strCopy.replace(brType4, '');
    }

    return strCopy.length === 0;
}


/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 min   |  2 min ago ... 45 min ago
 *   45 to 90 min           |  an hour ago
 *  90 min to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 min ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
    let msec = endDate - startDate;

    if (msec <= (45 * 1000)){
        return 'a few seconds ago';
    } else if (msec <= (90 * 1000)){
        return 'a minute ago';
    }else if (msec <= (45 * 60 * 1000)){
        let min = Math.floor(msec / (60 * 1000));
        if (msec % (60 * 1000) > (30 * 1000)) {
            min++;
        }
        return `${min} minutes ago`;
    }else if (msec <= (90 * 60 * 1000)){
        return 'an hour ago';
    }else if (msec <= (22 * 60 * 60 * 1000)){
        let hours = Math.floor(msec / (60 * 60 * 1000));
        if (msec % (60 * 60 * 1000) > (60 * 60 * 1000 / 2)) {
            hours++;
        }
        return `${hours} hours ago`;
    }else if (msec <= (36 * 60 * 60 * 1000)){
        return 'a day ago';
    }else if (msec <= (25 * 24 * 60 * 60 * 1000)){
        let days = Math.floor(msec / (24 * 60 * 60 * 1000));
        if (msec % (24 * 60 * 60 * 1000) > (24 * 60 * 60 * 1000 / 2)) {
            days++;
        }
        return `${days} days ago`;
    }else if (msec <= (45 * 24 * 60 * 60 * 1000)){
        return 'a month ago';
    }else if (msec <= (345 * 24 * 60 * 60 * 1000)){
        let months = Math.floor(msec / (30 * 24 * 60 * 60 * 1000));
        if (msec % (30 * 24 * 60 * 60 * 1000) > (30 * 24 * 60 * 60 * 1000 / 2)) {
            months++;
        }
        return `${months} months ago`;
    }else if (msec <= (545 * 24 * 60 * 60 * 1000)){
        return 'a year ago';
    } else{
        let years = Math.floor(msec / (365 * 24 * 60 * 60 * 1000));
        if (msec % (365 * 24 * 60 * 60 * 1000) > (365 * 24 * 60 * 60 * 1000 / 2)) {
            years++;
        }
        return `${years} years ago`;
    }
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
    return num.toString(n);
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
    if (pathes.length === 0) {
        return '';
    }

    let commonDirectoryPath = '';    
    
    let pathesLengths = pathes.map(function(value, index, array) {
        return value.length;
    });
    let pathMinLength = Math.min(...pathesLengths);

    for (let i = 0; i < pathMinLength; i++) {
        let currCharIsSameForAll = true;
        let currChar = pathes[0][i];
        for (let j = 1; j < pathes.length; j++) {
            if (pathes[j][i] !== currChar) {
                currCharIsSameForAll = false;
                break;                
            }
        }
        if (!currCharIsSameForAll) {
            break;
        } else {
            commonDirectoryPath += currChar;
        }        
    }

    return commonDirectoryPath.substring(0, commonDirectoryPath.lastIndexOf('/') + 1);
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
    let Result = new Array(m1.length);
    Result.fill(0);

    for (let i = 0; i < Result.length; i++) {
        Result[i] = new Array(m2[i].length);
        Result[i].fill(0);
    }

    for (let i = 0; i < m1.length; i++) {
        for (let j = 0; j < m2[0].length; j++) {
            for (let k = 0; k < m1[0].length; k++) {
                Result[i][j] += m1[i][k] * m2[k][j];
            }
        }    
    }

    return Result;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
    let result = '';

    for (let i = 0; i < 3; i++) {
        if ((position[i][0] === position[i][1]) && (position[i][1] === position[i][2]) && (position[i][0] === 'X' || position[i][0] === '0')) {
            result = position[i][0];
            return result;
        }
    }    

    for (let j = 0; j < 3; j++) {
        if ((position[0][j] === position[1][j]) && (position[1][j] === position[2][j]) && (position[0][j] === 'X' || position[0][j] === '0')) {
            result = position[0][j];
            return result;
        }
    }    

    if ((position[0][0] === position[1][1]) && (position[1][1] === position[2][2]) && (position[1][1] === 'X' || position[1][1] === '0')) {
        result = position[1][1];
        return result;
    }    

    if ((position[2][0] === position[1][1]) && (position[1][1] === position[0][2]) && (position[1][1] === 'X' || position[1][1] === '0')) {
        result = position[1][1];
        return result;
    }    

    return undefined;
}


module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString : getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString : timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition : evaluateTicTacToePosition
};
