let input = prompt("Insert year:")
console.log(input);
let result = (input-4)%12
if (result === 0) {
    console.log(`The Chinese zodiac sign for the year ${input} is Rat.`);
}
else if (result === 1) {
    console.log(`The Chinese zodiac sign for the year ${input} is Ox.`);
}
else if (result === 2) {
    console.log(`The Chinese zodiac sign for the year ${input} is Tiger.`);
}
else if (result === 3) {
    console.log(`The Chinese zodiac sign for the year ${input} is Rabbit.`);
}
else if (result === 4) {
    console.log(`The Chinese zodiac sign for the year ${input} is Dragon.`);
}
else if (result === 5) {
    console.log(`The Chinese zodiac sign for the year ${input} is Snake.`);
}
else if (result === 6) {
    console.log(`The Chinese zodiac sign for the year ${input} is Horse.`);
}
else if (result === 7) {
    console.log(`The Chinese zodiac sign for the year ${input} is Goat.`);
}
else if (result === 8) {
    console.log(`The Chinese zodiac sign for the year ${input} is Monkey.`);
}
else if (result === 9) {
    console.log(`The Chinese zodiac sign for the year ${input} is Rooster.`);
}
else if (result === 10) {
    console.log(`The Chinese zodiac sign for the year ${input} is Dog.`);
}
else if (result === 11) {
    console.log(`The Chinese zodiac sign for the year ${input} is Pig.`);
}