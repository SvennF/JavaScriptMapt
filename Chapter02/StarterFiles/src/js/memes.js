import './general';

console.log('Meme js file');
const deviceWidth = window.innerWidth;

class Memes {
    constructor() {
        console.log('inside meme class');
        this.$canvas = document.querySelector('#imgCanvas');
        this.$topTextInput = document.querySelector('#topText');
        this.$bottomTextInput = document.querySelector('#bottomText');
        this.$imageInput = document.querySelector('#image');
        this.$downloadButton = document.querySelector('#downloadMeme');
    }
}

new Memes();
