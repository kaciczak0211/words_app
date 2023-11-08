async function findWord(){
    const word = document.getElementById("word").value

    if(!word){
        alert("write a word")
    }

    const findWord = new URL(`https://api.dictionaryapi.dev/api/v2/entries/en/${ word }`)
    console.log(findWord);

    findWord.searchParams.set("token", "YOUR_TOKEN_HERE")

    const response = await fetch(findWord)

    console.log(response);

    const data = await response.json();

    console.log(data.word)
}