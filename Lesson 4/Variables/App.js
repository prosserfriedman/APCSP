// const add = 7 + 3;
// const sub = 7 - 3;
// const mult = 7 * 3;
// const div = 7 / 3;
// const paren = (83 + 92 + 86 + 94) / 4;
// console.log(add,sub,mult,div,paren)

// // let score = 0
// // console.log('Current Score:'+ score)

// let numLikes = 7
// console.log('So far ' + numLikes + ' people like this page')

// let score = 0;
// let lives = 3;
// console.log("'You have' + lives + 'lives left with score' + score");

// let a = 3
// let b = 7
// a = b
// b = a
// console.log("the value of a is" + a + "the value of b is" + b)

// let  someNum = 7;
// someNum = someNum + 1;
// console.log("The value of someNum is now: " + someNum);
// someNum = someNum + 1;
// console.log("The value of someNum is now: " + someNum);
// someNum = someNum + 1;
// console.log("The value of someNum is now: " + someNum);
// someNum = someNum * someNum;

// let x = 2
// let y = 3

// x = x+32/4
// y = y-9

// console.log(y+x)

// let x = 7;
// let y = 3;

// y = x-y

// console.log("The value of y is: " + y + " (y should be 4)");

// let x = 2;
// let y = 3;
// x = x+y+x
// console.log("The value of x is: " + x + " (x should be 7)");
let slider;
function setup() {
    slider = createSlider(0, 360, 100);
    sliderS = createSlider(0,100,50);
    sliderB = createSlider(0,100,50);
textInput = createInput("Bailey do be smellin");
    createCanvas(2600, 2120); 
    colorMode(HSB);
  }
  function draw() {
    background(slider.value(), sliderS.value(), sliderB.value());
    textSize(80);
    text("Bailey do be smellin", 210, 100);
  }
