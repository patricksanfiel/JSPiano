window.onload = (event) => {
    function playNote(event){
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)//Grab an audio element with a "data-key" attribute that matches the keycode of the key pressed by the user.
        const keyPressed = document.querySelector(`div[data-key="${event.keyCode}"]`)//Grab the key pressed by the user
        if(!audio) return//If there is no audio element that corresponds to the key pressed by the user, the value of audio will be null and we will return without executing the rest of the function.
        keyPressed.classList.add("play")
        audio.currentTime = 0;//Reset current time to 0 on every keypress so users will be able to hit the same note in rapid succession without having to wait for the audio to finish playing before hearing it again.
        audio.play()
    }
    function removePlayClass(event){
        this.classList.remove("play")
    }
    document.addEventListener("keydown", playNote)
    let allKeys = document.querySelectorAll(".piano-key")
    allKeys.forEach(key=>key.addEventListener("transitionend", removePlayClass))
    console.log(allKeys)
}