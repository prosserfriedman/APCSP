let s 
let string = 'my name is Prosser'

// check length
console.log(string.length)

//conversion
let num = 10
num = num.toString()
console.log(typeof num)

//searching
s = string.search('P')

s = string.startsWith('j')

s = string.includes('x')

//modifying
s = string.toLowerCase()


s= string.concat(' and I am great!')
console.log(s)

s= string.slice(3,8)

s = string.trim()
console.log(s)