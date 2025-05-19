const playPauseBtn = document.getElementById('play-pause');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
  isPlaying = !isPlaying;
  if (isPlaying) {
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
    // TODO: start playing music
  } else {
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    // TODO: pause music
  }
});
