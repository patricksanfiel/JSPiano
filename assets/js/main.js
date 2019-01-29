window.onload = (event) => {
    console.log("ready")
    document.addEventListener("keydown", playNote)
    function playNote(event){
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)//Grab an audio element with a "data-key" attribute that matches the keycode of the key pressed by the user.
        if(!audio) return//If there is no audio element that corresponds to the key pressed by the user, the value of audio will be null and we will return without executing the rest of the function.
        audio.play()
    }
}