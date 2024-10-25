
let startBtn=document.querySelector("#start")
let closeBtn=document.querySelector("#close")
let speakBtn=document.querySelector("#speak")
let time=document.querySelector("#time")
let battery=document.querySelector("#battery")
let internet=document.querySelector("#internet")
let turnOn=document.querySelector("#audio")

let date=new Date()
let hrs=date.getHours()
let mins=date.getMinutes()
let sec=date.getSeconds()


function autojarvis() {
    setTimeout(() => {
        recognition.start();
    }, 1000);
}

window.onload=() => {
    time.innerText=`${hrs}:${mins}:${sec}`
setInterval(()=> {
    let date=new Date()
    let hrs=date.getHours()
    let mins=date.getMinutes()
    let sec=date.getSeconds()
    time.textContent=`${hrs}:${mins}:${sec}`
    
} ,1000);
}

let batteryPromise=navigator.getBattery()
batteryPromise.then(batteryCallback)


function batteryCallback(batteryObject) {
    printBatteryStatus(batteryObject);
    setInterval(()=> {
        printBatteryStatus(batteryObject)
    },3000);
}
function printBatteryStatus(batteryObject) {
    battery.innerText=`${batteryObject.level*100}%`
}

const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition=new SpeechRecognition();

recognition.onstart=function() {
    console.log("vr start")
}
recognition.onresult = function(event) {
    const current= event.resultIndex;
    let transcript= event.results[current][0].transcript;

      transcript = transcript.toLowerCase();
     console.log(`my word:${transcript}`)
if(transcript.includes("hello")||transcript.includes("hi")) {
    readOut("hello happy sir. my name is jarvis.  i am made by junior engineer happy sir.   how can i help you? i am your sarvent")
}
if(transcript.includes("open youtube")) {
    readOut("opening youtube sir")
    window.open("https://www.youtube.com/")
}
if(transcript.includes("what is your name")) {
    readOut("my name is ai tool jarvis ")
}
if(transcript.includes("open google")) {
    readOut("opening google sir")
    window.open("https://www.google.com/")
}
if(transcript.includes("open facebook")) {
    readOut("opening facebook sir")
    window.open("https://www.facebook.com/")
}
if(transcript.includes("open instagram")) {
    readOut("opening instagram sir");
    window.open("https://www.instagram.com/")
}
if(transcript.includes("flipkart")) {
    readOut("opening flipkart sir");
    window.open("https://www.flipkart.com/")
}
if(transcript.includes("search")) {
    readOut("here's the result")
    let input=transcript.split("");
    input.splice(0,7);
    input=input.join("").split("").join("+")
    window.open(`https://www.google.com/search?q=${input}`)
}
if(transcript.includes("open my github account")) {
    readOut("opening your github account sir")
    window.open("https://github.com/JE-happy")
}
if(transcript.includes("play")) {
    readOut("here's the result")
    let input=transcript.split("")
    input.splice(0,5);
    input=input.join("").split("").join("+");
    window.open(`https://www.youtube.com/results?search_query=${input}`)
}
if(transcript.includes("whatsapp")) {
    readOut("opening whatsapp sir")
    window.open("https://web.whatsapp.com/")
}
if(transcript.includes("resume")) {
    readOut("here's the result")
    window.open("https://je-happy.github.io/happy-resume/home.html?")
}
};


recognition.onend=function() {
    console.log("vr close");
}

recognition.continuous=true;

startBtn.addEventListener("click",()=> {
    recognition.start();
})
closeBtn.addEventListener("click",()=> {
    recognition.stop();
})

//jarvis speech

function readOut(msg) {
    const speech=new SpeechSynthesisUtterance();

    speech.text=msg;
    speech.volume=1;
    window.speechSynthesis.speak(speech)
    console.log("speak out")
}

// example
speakBtn.addEventListener("click",()=> {
    readOut("hii, happy sir how are you")
})
