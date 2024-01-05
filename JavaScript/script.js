console.log("Welcome To Spotify");

// Intialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterplay');
let mybar = document.getElementById('mybar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Bilionera_320(PagalWorld)", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Deedar De - Chhalaang", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Pasoori - Shae Gill", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Naacho Naacho - RRR", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Lut Gaye - Jubin Nautiyal", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Garmi-Street Dancer", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Coca Cola Tu - Tony Kakkar", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Ishare Tere- Guru Randhawa", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Nikle Current - Jassie Gill", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Vaaste - Dhvani Bhanushali", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
    { songName: "Jugnu - Badshah", filePath: "songs/11.mp3", coverPath: "covers/11.jpg" },
    { songName: "Baarish Ban Jana - Stebin Ben", filePath: "songs/12.mp3", coverPath: "covers/12.jpg" },
    { songName: "Dil Galti Kar Baitha Hai - Jubin Nautiyal", filePath: "songs/13.mp3", coverPath: "covers/13.jpg" },
    { songName: "Bijlee Bijlee - Harrdy Sandhu", filePath: "songs/14.mp3", coverPath: "covers/14.jpg" },
    { songName: "Illegal Weapon 2 - Street Dancer 3D", filePath: "songs/15.mp3", coverPath: "covers/15.jpg" },
    { songName: "Jannat Ve - Darshan Raval Song", filePath: "songs/16.mp3", coverPath: "covers/16.jpg" },
    { songName: "Sajna - Badshah", filePath: "songs/17.mp3", coverPath: "covers/17.jpg" },
    { songName: "Barsaat Ki Dhun - Jubin Nautiyal", filePath: "songs/18.mp3", coverPath: "covers/18.jpg" },
    { songName: "Bedardi Se Pyaar Ka - Jubin Nautiyal", filePath: "songs/19.mp3", coverPath: "covers/19.jpg" },
    { songName: "Sheher Ki Ladki - Khandaani Shafakhana", filePath: "songs/20.mp3", coverPath: "covers/20.jpg" },
    { songName: "Dil Hai Deewana - Darshan Raval", filePath: "songs/21.mp3", coverPath: "covers/21.jpg" },
    { songName: "Dil Chori - Sonu Ke Titu Ki Sweety", filePath: "songs/22.mp3", coverPath: "covers/22.jpg" },
    { songName: "Designer - Yo Yo Honey Singh", filePath: "songs/23.mp3", coverPath: "covers/23.jpg" },
    { songName: "The Punjaban Song - Jugjugg Jeeyo", filePath: "songs/24.mp3", coverPath: "covers/24.jpg" },
    { songName: "Tera Naam - Darshan Raval", filePath: "songs/25.mp3", coverPath: "covers/25.jpg" },
    { songName: "Rim Jhim - Jubin Nautiyal", filePath: "songs/26.mp3", coverPath: "covers/26.jpg" },
    { songName: "Kya Karu - Millind Gaba", filePath: "songs/27.mp3", coverPath: "covers/27.jpg" },
    { songName: "Bom Diggy Diggy - Sonu Ke Titu Ki Sweety", filePath: "songs/28.mp3", coverPath: "covers/28.jpg" },
    { songName: "Jug Jug Jeeve - Shiddat", filePath: "songs/29.mp3", coverPath: "covers/29.jpg" },
    { songName: "Gal Ban Gayi", filePath: "songs/30.mp3", coverPath: "covers/30.jpg" },
    { songName: "Thoda-Thoda-Pyar_320(PaglaSongs)", filePath: "songs/31.mp3", coverPath: "covers/31.jpg" },
    { songName: "Main Tera Boyfriend - Raabta (Arijit Singh) 190Kbps", filePath: "songs/32.mp3", coverPath: "covers/32.jpg" },
    { songName: "Sabki Baaratein Aayi - Dev Negi", filePath: "songs/33.mp3", coverPath: "covers/33.jpg" },
    { songName: "Mast Nazron Se", filePath: "songs/34.mp3", coverPath: "covers/34.jpg" },
    { songName: "Yaad Piya Ki Aane Lagi - Neha Kakkar", filePath: "songs/35.mp3", coverPath: "covers/35.jpg" },
    { songName: "Baithe Baithe - Stebin Ben", filePath: "songs/36.mp3", coverPath: "covers/36.jpg" },
    { songName: "Teri Aankhon Mein - Darshan Raval", filePath: "songs/37.mp3", coverPath: "covers/37.jpg" },
    { songName: "Mehabooba- KGF Chapter-2", filePath: "songs/38.mp3", coverPath: "covers/38.jpg" },
    { songName: "Deaf kev - Invincible", filePath: "songs/39.mp3", coverPath: "covers/39.jpg" },
    { songName: "Youtube tones", filePath: "songs/40.mp3", coverPath: "covers/40.jpg" },
    { songName: "Janji- Hereos Tonight", filePath: "songs/41.mp3", coverPath: "covers/41.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


// Listen To Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    mybar.value = progress;
})

mybar.addEventListener('change', () => {
    audioElement.currentTime = mybar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 40) {
        songIndex = 0;
    }
    else {
        console.log(songIndex);
        songIndex = songIndex + 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    makeAllPlays();
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        console.log(songIndex);
        songIndex = songIndex - 1;
    }
    audioElement.src = `songs/${songIndex - 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    makeAllPlays();
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})