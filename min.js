let engWord = document.getElementById("eng-word");
let plWord = document.getElementById("pl-word");
let checkBtn = document.getElementById("check-btn");
let nextWord = document.getElementById("next");
let correct = document.getElementById("correct");
let start = document.getElementById("start");
let mainContainer = document.getElementById("main-con");


//Arrays with words, database

let engArray = ["music", "tree", "ball", "lamp"];
let plArray = ["muzyka", "drzewo", "piłka", "lampa"];
let i = 0;

function loadContent(){
    mainContainer.style.display = "block"
    start.style.display = "none";
    engWord.textContent = engArray[i]
    plWord.textContent = plArray[i]
    i++
    if(i > engArray.length){
        engWord.textContent = "end of the game, you konw all words!"
        plWord.textContent = "";
    }
    plWord.style.color = "white"
    correct.addEventListener("click", ()=>{
        engWord.style.color = "green"
        plWord.style.color = "green"
        
    })
}

start.addEventListener("click", loadContent);
nextWord.addEventListener("click",loadContent)
// nextWord.addEventListener("click",hideBtn)

// function hideBtn(){
//     start.style.display = "none";
// }

checkBtn.addEventListener("click", ()=>{
    plWord.style.color = "black"
})

