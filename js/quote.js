const songs = [
  {
    song: "Fearless",
    artist: "Lesserafim",
  },
  {
    song: "Love dive",
    artist: "Ive",
  },
  {
    song: "Feel My Rhythm",
    artist: "Red Velvet",
  },
  {
    song: "Strawberry Moon",
    artist: "IU",
  },
  {
    song: "Dream Comes True",
    artist: "Aespa",
  },
  {
    song: "TOMBOY",
    artist: "(G)-IDLE",
  },
  {
    song: "Real Love",
    artist: "OH MY GIRL",
  },
  {
    song: "INVU",
    artist: "Taeyeon",
  },
  {
    song: "O.O",
    artist: "NMIXX",
  },
  {
    song: "I'm Not Cool",
    artist: "HyunA",
  },
];

const song = document.querySelector("#songs span:first-child");
const artist = document.querySelector("#songs span:last-child");

const todaySong = songs[Math.floor(Math.random() * songs.length)];

song.innerText = todaySong.song + " - ";
artist.innerText = todaySong.artist;
