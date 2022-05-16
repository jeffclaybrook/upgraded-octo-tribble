const audio = new Audio();
const main = document.querySelector('main');
const playlist = document.querySelector('.playlist');
const player = document.querySelector('.player');
const details = document.querySelector('.details');
const thumb = document.querySelector('.song-thumb');
const album = document.querySelector('.song-album');
const poster = document.querySelector('.song-poster');
const title = document.querySelector('.song-title');
const artist = document.querySelector('.song-artist');
const timer = document.querySelector('.song-timer');
const duration = document.querySelector('.song-duration');
const seek = document.querySelector('.seek-bar');
const prevBtn = document.querySelector('.prev-btn');
const playBtn = document.querySelector('.play-btn');
const nextBtn = document.querySelector('.next-btn');
const shareBtn = document.querySelector('.share-btn');
const collapseBtn = document.querySelector('.collapse-btn');
const favoriteBtn = document.querySelector('.favorite-btn');
const bg = 'linear-gradient(to bottom, rgba(69, 71, 85, .925) 0%, rgba(28, 28, 31, .95) 100%)';
const people = ['Bill Clinton', 'Princess Diana', 'Elon Musk', 'Keanu Reeves', 'Joan of Arc', 'Albert Enstein', 'John Lennon', 'Michael Jackson', 'Abraham Lincoln', 'The Virgin Mary', 'Prison Mike', 'The Scranton Strangler', 'Adam and Eve', 'John the Baptist', 'Yoko Ono', 'Mike Lindell', 'Rudy Giuliani', 'Carlton Banks', 'Reince Priebus', 'Michael Clump', 'Detective Micahel Scarn', 'Bill Lumbergh'];
const person = document.querySelector('.person').innerHTML = people[Math.floor(Math.random() * people.length)];

let songIndex = Math.floor((Math.random() * data.length) + 1);
let isPlaying = false;

window.addEventListener('load', () => {
   loadPlaylist();
   loadSong(songIndex);
})

function loadPlaylist() {
   let liTag = document.createElement('li');
   for (let i = 0; i < data.length; i++) {
      liTag = `
      <li data-index="${i + 1}">
         <img src="${data[i].thumb}" alt="Image">
         <div class="wrapper">
            <h2>${data[i].title}</h2>
            <h3>${data[i].artist}</h3>
         </div>
         <button><span class="material-symbols-outlined">more_vert</span></button>
      </li>`;
      playlist.insertAdjacentHTML('beforeend', liTag);
   }
}

function loadSong(i) {
   let song = data[i];
   poster.src = song.poster;
   audio.src = song.file;
   title.innerHTML = song.title;
   artist.innerHTML = song.artist;
   album.innerHTML = song.album;
   duration.innerHTML = song.duration;
   timer.innerHTML = '00:00';
   seek.value = 0;
   player.style.background = `${bg}, url(${song.poster}) no-repeat center center/cover`;
   audio.addEventListener('loadeddata', () => {
      seek.max = audio.duration;
   });
   let playlistItems = playlist.getElementsByTagName('li');
   for (let i = 0; i < playlistItems.length; i++) {
      playlistItems[i].classList.remove('active');
   };
   playlist.getElementsByTagName('li')[songIndex].classList.add('active');
}

function formatTime(time) {
   let min = Math.floor(time / 60);
   let sec = Math.floor(time % 60);
   let minutes = min < 10 ? `0${min}` : `${min}`;
   let seconds = sec < 10 ? `0${sec}` : `${sec}`;
   return `${minutes}:${seconds}`;
}

setInterval(() => {
   seek.value = Math.floor(audio.currentTime);
   timer.innerHTML = formatTime(audio.currentTime)
}, 1000);

function clickedSong(e) {
   songIndex = e.target.closest('li').getAttribute('data-index') - 1;
   loadSong(songIndex);
   playSong();
}

function favoriteSong() {
   favoriteBtn.classList.toggle('filled');
}

function playSong() {
   audio.play();
   player.classList.add('playing');
   playBtn.querySelector('span').innerText = 'pause';
   isPlaying = true;
}

function pauseSong() {
   audio.pause();
   player.classList.remove('playing');
   playBtn.querySelector('span').innerText = 'play_arrow';
   isPlaying = false;
}

function playPauseSong() {
   isPlaying ? pauseSong() : playSong();
}

function prevSong() {
   songIndex--;
   if (songIndex < 0) {
      songIndex = data.length - 1;
   }
   loadSong(songIndex);
   playSong();
}

function nextSong() {
   songIndex++;
   if (songIndex > data.length - 1) {
      songIndex = 0;
   }
   loadSong(songIndex);
   playSong();
}

function seekSong() {
   audio.currentTime = seek.value;
}

function expandPlayer() {
   main.classList.add('overlay');
   player.classList.add('expanded');
}

function collapsePlayer() {
   main.classList.remove('overlay');
   player.classList.remove('expanded');
}

function shareApp() {
   const shareMenu = document.querySelector('.share-menu');
   const shareData = {
      title: 'MP3 App',
      text: 'by Jeff Claybrook',
      url: 'https://jeffclaybrook.github.io/upgraded-octo-tribble/'
   };
   navigator.share(shareData)
   .then(() => shareMenu.textContent = '')
   .catch((e) => shareMenu.textContent = '' + e);
}

playlist.addEventListener('click', clickedSong);
favoriteBtn.addEventListener('click', favoriteSong);
playBtn.addEventListener('click', playPauseSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
seek.addEventListener('change', seekSong);
shareBtn.addEventListener('click', shareApp);
details.addEventListener('click', expandPlayer);
collapseBtn.addEventListener('click', collapsePlayer);
audio.addEventListener('ended', nextSong);
