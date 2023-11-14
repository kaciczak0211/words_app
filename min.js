const wordInput = document.getElementById("word")
const btn = document.getElementById("btn")
const result = document.getElementById("result")
const sound = document.getElementById("sound")

const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/`


btn.addEventListener("click", function(){
    const wordValue = wordInput.value
    console.log(fetch(`${URL}${wordValue}`));
    fetch(`${URL}${wordValue}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = `        
        <h3 id="title">${wordValue}</h3>
        <h3 id="pos">${data[0].meanings[0].partOfSpeech}</h3>
        <h3 id="def">${data[0].meanings[0].definitions[0].definition}</h3>
        <h3 id="word-example">${data[0].meanings[0].definitions[0].example || ""}</h3>
        <button onclick="playSound()"><i class="fa-solid fa-volume-high" style="color: #000000;"></i></button>
        `
        let audioMp3 = data[0].phonetics[0].audio || data[0].phonetics[1].audio || data[0].phonetics[2].audio || data[0].phonetics[3].audio
        console.log(sound);
        sound.setAttribute("src", `${audioMp3}`)


    })
    .catch(() =>{
        result.innerHTML = `<h3>Couldn't find the word</h3>`
    })
})

function playSound(){
    sound.play();
    console.log("play")
}