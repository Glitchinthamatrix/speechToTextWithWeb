/*var synth = window.speechSynthesis;
var voices;
setTimeout(() => {
    voices = synth.getVoices();
    console.log(synth.getVoices());
}, 100);


var speech = new SpeechSynthesisUtterance(`hello, i am Patricia`);
speech.lang = 'en';
synth.speak(speech);

 */


var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();
var textbox = $("#textbox");
var instructions = $("#instructions");


recognition.continuous = true;

var content = "";

recognition.onstart = () => {
    instructions.text("listening...")
}

recognition.onerror = () => {
    instructions.text("error occured")
}

recognition.onresult = (e) => {
    let current = e.resultIndex;
    let transcript = e.results[current][0].transcript;
    content += transcript;
    textbox.val(content);
}

$("#startbtn").on("click", () => {
    if (content.length) {
        content += ""
    }
    recognition.start();
})