function tellStory ([name1, mood, activity]) {
    let story = `This is ${name1}.${name1} is nice person.Today they are ${mood}.They are ${activity} all day.The end`;
    return story;
}
let storyArray = ['Stefan' , 'happy' , 'learning how to drive'];
let result = tellStory(storyArray);
console.log(result);
