var i = 0;
var j = 10;
var text = "type me ...";
var time = 20;

let letters = [];
const words = ['apple', 'orange', 'grapes', 'mango'];

function displayWord() {

    let word = words[0];
    document.getElementById("text").innerHTML += word;

    letters = word.split('');
    document.getElementById("text1").innerHTML += letters;

}

function typing() {
    if (i < text.length) {
        document.getElementById("title").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 300);
    }
}

function timecount() {
    if (j >= 0) {
        if (j == 10) {
            document.getElementById("time").innerHTML = "00:" + j;
        } else {
            document.getElementById("time").innerHTML = "00:0" + j;
        }
        j--;
        setTimeout(timecount, 1000);
    }
}

typing()
displayWord()
timecount()