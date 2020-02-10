// function setup() {
//     createCanvas(windowWidth, windowHeight)
//     background('black')
//     createP('Keebs smells like beans')
    // createElement('h1','my lucky numbers below');
    // createElement('p', 'my lucky number is Fortnite');
    // let titleText = createElement('h1', 'My lucky number is...');
    // let numText = createElement('p', 'Fortnite');
    // console.log(numText)

// }

// function mousePressed(){
//     createP("My lucky number is 231"+random(2,912))
// }

// function draw() {
//     createP('Baileys minecraft password is cookies480!')
// }

// SAY HELLO

let button 
let greeting

function setup() {

    createCanvas(windowWidth, windowHeight)

    button = createButton('Try Me');
    button.position(width/2, height/2)
    button.mousePressed(greet)

    greeting = createElement('h2', 'Say Hello!')
    greeting.position(width / 2, height / 3)
    textAlign(CENTER)
    textSize(50)
}

function greet() {
    greeting.html('HELLO!')

    for (let i=0; i< 200; i++) {
        push();
        fill(random(255), 255, 255);
        translate(random(width), random(height))
        rotate(random(2 * PI));
        text('HELLO', 0, 0);
        pop();
    }
    }