
function hentOrd(antallOrd){
    const ord = "is a because fun hacker in a best bet better between big bike bill billion charge check cheek cheese chef daughter cow dark day dead deal dealer dear death debate toilet with out you are how they this kill adopt adult advance advanced advantage adventure advertising criminal dad does do follow me weird key did kind sister mom has need feel remember memory an".split(" ")
    console.log(ord)
    let valgteord=[]
    //console.log(valgteord)
    while (valgteord.length<antallOrd){
        valgteord.push(ord[Math.round(Math.random()*ord.length-1)])
        console.log(valgteord)
    }
    return valgteord;
}

function typingSpeedTest(words) {
    const startButton = document.getElementById('startButton');
    const inputField = document.getElementById('inputField');
    const result = document.getElementById('result');
    
    
    startButton.addEventListener('click', () => {
        inputField.disabled = false;
        inputField.value = '';
        inputField.focus();
        inputField.dataset.startTime = performance.now();
        result.textContent = '';
        
    });

    inputField.addEventListener('input', () => {
        if (inputField.value.toLowerCase() ===words.join(" ")) {
            const endTime = performance.now();
            const startTime = parseFloat(inputField.dataset.startTime);
            const timeTaken = (endTime - startTime) / 1000; // Convert to seconds
            const wordsPerSecond = words.length / timeTaken;
            result.textContent = `Great! You typed the word correctly in ${timeTaken.toFixed(2)} seconds. Your typing speed is ${(wordsPerSecond*60).toFixed(2)} words per min.`;
            inputField.disabled = true;
        }
    });
}

window.onload = () => {
    
    const wordToType = hentOrd(6);
    document.getElementById('wordToType').textContent = wordToType.join(" ");
    typingSpeedTest(wordToType);
};