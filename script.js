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
const people = [
  'Bill Clinton', 'Princess Diana', 'Elon Musk', 'Keanu Reeves',
  'Joan of Arc', 'Albert Enstein', 'John Lennon', 'Michael Jackson',
  'Abraham Lincoln', 'The Virgin Mary', 'Prison Mike', 'Adam and Eve',
  'The Scranton Strangler', 'John the Baptist', 'Mike Lindell',
  'Yoko Ono', 'Rudy Giuliani', 'Carlton Banks', 'Reince Priebus',
  'Michael Clump', 'Detective Michael Scarn', 'Bill Lumbergh',
  'Luka Doncic', 'Pluckers Wings Bar', 'Randy Marsh', 'Steve Irwin',
  'Smarter Child', 'Lord Voldemort'
];
const data = [
   {
      title: "Sherane a.k.a Master Splinter's Daughter",
      artist: "Kendrick Lamar",
      duration: "04:32",
      album: "good kid, m.A.A.d city",
      file: 'songs/song-1.mp3',
      poster: 'images/image-1.webp',
      thumb: 'images/thumb-1.webp'
   },
   {
      title: "Bitch, Don't Kill My Vibe",
      artist: "Kendrick Lamar",
      duration: "05:10",
      album: "good kid, m.A.A.d city",
      file: 'songs/song-2.mp3',
      poster: 'images/image-2.webp',
      thumb: 'images/thumb-2.webp'
   },
   {
      title: "Backseat Freestyle",
      artist: "Kendrick Lamar",
      duration: "03:32",
      album: "good kid, m.A.A.d city",
      file: 'songs/song-3.mp3',
      poster: 'images/image-3.webp',
      thumb: 'images/thumb-3.webp'
   },
   {
      title: "The Art of Peer Pressure",
      artist: "Kendrick Lamar",
      duration: "05:24",
      album: "good kid, m.A.A.d city",
      file: 'songs/song-4.mp3',
      poster: 'images/image-4.webp',
      thumb: 'images/thumb-4.webp'
   },
   {
      title: "Money Trees",
      artist: "Kendrick Lamar feat. Jay Rock",
      duration: "06:26",
      album: "good kid, m.A.A.d city",
      file: 'songs/song-5.mp3',
      poster: 'images/image-5.webp',
      thumb: 'images/thumb-5.webp'
   },
   {
      title: "Poetic Justice",
      artist: "Kendrick Lamar feat. Drake",
      duration: "05:00",
      album: "good kid, m.A.A.d city",
      file: 'songs/song-6.mp3',
      poster: 'images/image-6.webp',
      thumb: 'images/thumb-6.webp'
   },
   {
      title: "Good Kid",
      artist: "Kendrick Lamar",
      duration: "03:34",
      album: "good kid, m.A.A.d city",
      file: 'songs/song-7.mp3',
      poster: 'images/image-7.webp',
      thumb: 'images/thumb-7.webp'
   },
   {
      title: "m.A.A.d city",
      artist: "Kendrick Lamar feat. MC Eiht",
      duration: "05:50",
      album: "good kid, m.A.A.d city",
      file: 'songs/song-8.mp3',
      poster: 'images/image-8.webp',
      thumb: 'images/thumb-8.webp'
   },
   {
      title: "Swimming Pools (Drank)",
      artist: "Kendrick Lamar",
      duration: "05:13",
      album: "good kid, m.A.A.d city",
      file: 'songs/song-9.mp3',
      poster: 'images/image-9.webp',
      thumb: 'images/thumb-9.webp'
   },
   {
      title: "Sing About Me, I'm Dying of Thirst",
      artist: "Kendrick Lamar",
      duration: "12:03",
      album: "good kid, m.A.A.d city",
      file: 'songs/song-10.mp3',
      poster: 'images/image-10.webp',
      thumb: 'images/thumb-10.webp'
   },
   {
      title: "Real",
      artist: "Kendrick Lamar feat. Anna Wise",
      duration: "07:23",
      album: "good kid, m.A.A.d city",
      file: 'songs/song-11.mp3',
      poster: 'images/image-11.webp',
      thumb: 'images/thumb-11.webp'
   },
   {
      title: "Compton",
      artist: "Kendrick Lamar feat. Dr. Dre",
      duration: "04:08",
      album: "good kid, m.A.A.d city",
      file: 'songs/song-12.mp3',
      poster: 'images/image-12.webp',
      thumb: 'images/thumb-12.webp'
   },
   {
      title: "All We Got",
      artist: "Chance the Rapper feat. Kanye West & Chicago Childrens Choir",
      duration: "03:23",
      album: "Coloring Book",
      file: 'songs/song-13.mp3',
      poster: 'images/image-13.webp',
      thumb: 'images/thumb-13.webp'
   },
   {
      title: "No Problem",
      artist: "Chance the Rapper feat. Lil Wayne & 2 Chainz",
      duration: "05:04",
      album: "Coloring Book",
      file: 'songs/song-14.mp3',
      poster: 'images/image-14.webp',
      thumb: 'images/thumb-14.webp'
   },
   {
      title: "Summer Friends",
      artist: "Chance the Rapper feat. Jeremih & Francis & The Lights",
      duration: "04:50",
      album: "Coloring Book",
      file: 'songs/song-15.mp3',
      poster: 'images/image-15.webp',
      thumb: 'images/thumb-15.webp'
   },
   {
      title: "D.R.A.M. Sings Special",
      artist: "Chance the Rapper",
      duration: "01:41",
      album: "Coloring Book",
      file: 'songs/song-16.mp3',
      poster: 'images/image-16.webp',
      thumb: 'images/thumb-16.webp'
   },
   {
      title: "Blessings",
      artist: "Chance the Rapper feat. Jamila Woods",
      duration: "03:42",
      album: "Coloring Book",
      file: 'songs/song-17.mp3',
      poster: 'images/image-17.webp',
      thumb: 'images/thumb-17.webp'
   },
   {
      title: "Same Drugs",
      artist: "Chance the Rapper",
      duration: "04:17",
      album: "Coloring Book",
      file: 'songs/song-18.mp3',
      poster: 'images/image-18.webp',
      thumb: 'images/thumb-18.webp'
   },
   {
      title: "Mixtape",
      artist: "Chance the Rapper feat. Young Thug & Lil Yachty",
      duration: "04:52",
      album: "Coloring Book",
      file: 'songs/song-19.mp3',
      poster: 'images/image-19.webp',
      thumb: 'images/thumb-19.webp'
   },
   {

      title: "Angels",
      artist: "Chance the Rapper feat. Saba",
      duration: "03:26",
      album: "Coloring Book",
      file: 'songs/song-20.mp3',
      poster: 'images/image-20.webp',
      thumb: 'images/thumb-20.webp'
   },
   {
      title: "Juke Jam",
      artist: "Chance the Rapper",
      duration: "03:39",
      album: "Coloring Book",
      file: 'songs/song-21.mp3',
      poster: 'images/image-21.webp',
      thumb: 'images/thumb-21.webp'
   },
   {
      title: "All Night",
      artist: "Chance the Rapper feat. Justin Bieber & Towkio",
      duration: "02:21",
      album: "Coloring Book",
      file: 'songs/song-22.mp3',
      poster: 'images/image-22.webp',
      thumb: 'images/thumb-22.webp'
   },
   {
      title: "How Great",
      artist: "Chance the Rapper feat. Jay Electronica & My cousin Nicole",
      duration: "05:37",
      album: "Coloring Book",
      file: 'songs/song-23.mp3',
      poster: 'images/image-23.webp',
      thumb: 'images/thumb-23.webp'
   },
   {
      title: "Smoke Break",
      artist: "Chance the Rapper feat. Future",
      duration: "03:46",
      album: "Coloring Book",
      file: 'songs/song-24.mp3',
      poster: 'images/image-24.webp',
      thumb: 'images/thumb-24.webp'
   },
   {
      title: "Finish Line / Drown",
      artist: "Chance the Rapper feat. T-Pain, Kirk Franklin, Eryn Allen Kane & Noname",
      duration: "06:47",
      album: "Coloring Book",
      file: 'songs/song-25.mp3',
      poster: 'images/image-25.webp',
      thumb: 'images/thumb-25.webp'
   },
   {
      title: "Blessings",
      artist: "Chance the Rapper feat. Ty Dolla $ign, Raury, BJ The Chicago Kid & Anderson .Paak",
      duration: "03:50",
      album: "Coloring Book",
      file: 'songs/song-26.mp3',
      poster: 'images/image-26.webp',
      thumb: 'images/thumb-26.webp'
   }
];
const person = document.querySelector('.person');
person.innerHTML = people[Math.floor(Math.random() * people.length)];

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
