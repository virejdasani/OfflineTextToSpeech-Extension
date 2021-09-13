// This is so that if speech is still playing from previous session, it stops on page load
speechSynthesis.cancel();

var isSpeaking = false;

// Initialize the speech synthesis
var speech = new SpeechSynthesisUtterance();
speech.rate = 1;
speech.pitch = 1;
speech.volume = 1;
speech.voice = speechSynthesis.getVoices()[0];

document
  .getElementById("speakInputTextButton")
  .addEventListener("click", () => {
    isSpeaking = true;

    speech.text = document.getElementById("textInput").value;
    speechSynthesis.speak(speech);
  });

document.getElementById("pauseSpeechButton").addEventListener("click", () => {
  if (isSpeaking) {
    isSpeaking = false;
    speechSynthesis.pause();
    document.getElementById(
      "pauseSpeechButton"
    ).innerHTML = `Resume<img class="icon-link-small"
    src="./assets/icons/resumeIcon.svg">`;
  } else {
    isSpeaking = true;
    speechSynthesis.resume();
    document.getElementById(
      "pauseSpeechButton"
    ).innerHTML = `Pause<img class="icon-link-small"
    src="./assets/icons/pauseIcon.svg">`;
  }
});

document.getElementById("stopSpeechButton").addEventListener("click", () => {
  isSpeaking = false;
  speechSynthesis.cancel();
});
