document.addEventListener('keydown', function(e) {
    var noteKey = document.querySelector(`.key[data-key="${e.code}"]`);
    var soundPlay = document.querySelector(`audio[data-key="${e.code}"]`);
    if (noteKey.className == "key") {
        noteKey.classList.add("key-playing");
        soundPlay.currentTime = 1.3;
        soundPlay.play();
    }
});

document.addEventListener('keyup', function(e) {
    var noteKey = document.querySelector(`.key[data-key="${e.code}"]`);
    var soundPlay = document.querySelector(`audio[data-key="${e.code}"]`);
    if (noteKey.classList.contains("key-playing")) {
        noteKey.classList.remove("key-playing");
        soundPlay.pause();
        soundPlay.currentTime = 0;
    }
});