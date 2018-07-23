
var now, yearJohn, yearMark
now = 2018
ageJohn = 28
ageMark = 33


// Math Operators
yearJohn = now - ageJohn
yearMark = now - ageMark

console.log('Mark was born in ' + ageMark)
console.log('John was born in ' + ageJohn)

console.log(now + 2)
console.log(now * 2)
console.log(now / 10)


// Logical Operators
var johnOlder = ageJohn < ageMark
console.log(johnOlder)

// typeof operator
console.log(typeof johnOlder) // boolean
console.log(typeof ageJohn) // number
console.log(typeof 'Mark is older than John') // string
var x;
console.log(typeof x) // undefined


/******************************************************************
    Operator Precedence -- My Dear Aunt Sally

 *******************************************************************/

 var now = 2018 
 var yearJohn = 1989
 var fullAge = 18

 var isFullage = now - yearJohn >= fullAge // True 
 console.log(isFullage)

 var ageJohn = now - yearJohn
 var ageMark = 35
 var average = (ageJohn + ageMark) /2

 console.log(average)


 // Mutliple Assignments 

 var x, y 

 x = y = (3 + 5) * 4 - 6 //  8 * 4 - 6 // 32- 6 // 26
 console.log(x)

 // More Operators 
 x *= 2
 console.log(x)

 x += 10
 console.log(x)

 x++ 
 console.log(x)

 x-- 
 console.log(x)

