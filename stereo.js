document.addEventListener('DOMContentLoaded', () => {
  const playlist = [
    { title: "♪ Yabujin - 。✰302？ionwan2go✰。 ♪", src: "https://www.dropbox.com/scl/fi/9gfenh43hki4o6iokqvss/Yabujin-302ionwan2go.mp3?rlkey=lrh5f4adz8xkklzjf6o9jdsuk&st=62k5km5s&raw=1" },
    { title: "♪ I.W. - slowly losing your mind due to excessive internet exposure? don't worry, I am also. (ft.Яu-a) ♪", src: "https://www.dropbox.com/scl/fi/uqf4e274kaoni6nydnnlp/I.W.-slowly-losing-your-mind-due-to-excessive-internet-exposure_-don-t-worry-I-am-also.-ft.-u-a.mp3?rlkey=5a8z96up9wvldd378cnujdii3&st=8ai1anyy&raw=1" },
    { title: "♪ Andy pls - ethan come back breakcore needs you ♪", src: "https://www.dropbox.com/scl/fi/zrv97ap9qw8xno76apf9f/Andy-pls-ethan-come-back-breakcore-needs-you.mp3?rlkey=nbx57e2aeqlxcvypc9u273noo&st=nj4mqu5o&raw=1" },
    { title: "♪ lhk - scattered words ♪", src: "https://www.dropbox.com/scl/fi/gyslvigi1p9amj8s60p8j/lhk-scattered-words.mp3?rlkey=gzik7jhopxf5szdag78w1nm52&st=cdai2g19&raw=1" },
    { title: "♪ siouxxie - ketamine (slowed down) ♪", src: "https://www.dropbox.com/scl/fi/zyu27f47t3l5uxvmf9rrk/siouxxie-ketamine-slowed-down.mp3?rlkey=sahsmang40p3bbqr5o925ua2g&st=xvjz2b24&raw=1" },
    { title: "♪ pupsies - misery. ♪", src: "https://www.dropbox.com/scl/fi/2ef40lb5ixdfm9419351b/misery..mp3?rlkey=ze1c00md56kfsssc0sgq3qrz7&st=kahguf4e&raw=1" },
    { title: "♪ DJ BEATCOIN - more & more jumpstyle (slowed) ♪", src: "https://www.dropbox.com/scl/fi/ukct360jn0eupor6zb4mq/MORE-AND-MORE-JUMPSTYLE-SLOWED.mp3?rlkey=ilyt2c9d0dcx439gaf4zsm77n&st=rdihhezi&raw=1" },
    { title: "♪ ПТИЦУ ЕМЪ - Биохазард ♪", src: "https://www.dropbox.com/scl/fi/0zgnokfiqfujo87y5ry2o/.mp3?rlkey=rixjrs9eunegoojgy3pmalvfw&st=t6mng8bp&raw=1" },
    { title: "♪ ROMANCEPLANET - ɨN ȶօ ȶHɛ Fʟօօʀ ♪", src: "https://www.dropbox.com/scl/fi/31k5ygtdwsb79d7brkts8/N-H-F.mp3?rlkey=0zn02obg03tcgnsquskvtc9so&st=p3kxukqg&raw=1" },
    { title: "♪ Machine Girl - Status ♪", src: "https://www.dropbox.com/scl/fi/p7jmv84s402iaygi3y02h/Status.mp3?rlkey=5jg3n95gcfb8uprs3urd9dsk9&st=50f9ocmf&raw=1" },
    { title: "♪ Machine Girl - ... Because I'm Young Arrogant and Hate Everything You Stand For ♪", src: "https://www.dropbox.com/scl/fi/u24t0wmkp02ft8il3437e/_Because-I-m-Young-Arrogant-and-Hate-Everything-You-Stand-For.mp3?rlkey=zh89dtcysezz7qz9iw5ntrncn&st=lp9janyr&raw=1" },
    { title: "♪ Machine Girl - うずまき ♪", src: "https://www.dropbox.com/scl/fi/mz2lnbpapeh8ia2bzbpzi/.mp3?rlkey=mjnqjrn34p8flk25qskt0vfun&st=ej92y0ma&raw=1" },
    { title: "♪ Machine Girl - Congratulations ♪", src: "https://www.dropbox.com/scl/fi/3e7v2j6an4acnon4p6dmc/Congratulations.mp3?rlkey=ig8ukwazhu4978v0qk6xj925b&st=sctvpcb4&raw=1" },
    { title: "♪ Machine Girl - Splatter! ♪", src: "https://www.dropbox.com/scl/fi/6zd8ru1fy5e23xhxr473a/Splatter.mp3?rlkey=zvtlixyealk57rurbw323odn4&st=mfvy5646&raw=1" },
    { title: "♪ femtanyl - BODY THE PISTOL ♪", src: "https://www.dropbox.com/scl/fi/071k1nrgwdu42immweubg/femtanyl-BODY-THE-PISTOL-lyrics-video.mp3?rlkey=nisz2404h3a0rzxifasz4vz17&st=rqtnid4c&raw=1" },
    { title: "♪ femtanyl - MAN BITES DOG ♪", src: "https://www.dropbox.com/scl/fi/yri8uzf2c1gvy4pr69yuw/MAN-BITES-DOG.mp3?rlkey=f77hu92ofwcku7owj3v3nozhp&st=pyp1pfem&raw=1" },
    { title: "♪ femtanyl - MAGFEST ♪", src: "https://www.dropbox.com/scl/fi/0kccdfzsiwxle7m1q5nra/femtanyl-MAGFEST.mp3?rlkey=rpb00dnjk6epmkvsjbarx37r5&st=gy2umne6&raw=1" },
    { title: "♪ femtanyl - xX_N3VR_SAID_GOODBY3_Xx ♪", src: "https://www.dropbox.com/scl/fi/3ty3z06n912fuf2kghbgm/femtanyl-xXN3VRSAIDGOODBY3Xx.mp3?rlkey=mz5ns8vswwk99qkum9aly3tg6&st=y5zac2bz&raw=1" },
    { title: "♪ femtanyl - BALL GOWN ♪", src: "https://www.dropbox.com/scl/fi/97wn7hrzgz9ir93kxw6ch/LilyNiku-BALL-GOWN.mp3?rlkey=2hmar7nxkz6jbq978r9haevwy&st=ohbtrrm7&raw=1" },
    { title: "♪ HAKUSHI HASEGAWA - Doku ♪", src: "https://www.dropbox.com/scl/fi/lrpwveshlru40trry9poa/Doku.mp3?rlkey=fxjbcl0xsbeekogp3fkzqkz1t&st=cwd8svut&raw=1" },
    { title: "♪ Yabujin - Baroque ♪", src: "https://www.dropbox.com/scl/fi/nmlshbbgvvoua4z0fqe41/Yabujin-Baroque-Music-Video.mp3?rlkey=obtqap84r9jxsjhc7daoxknwo&st=86lvbhh8&raw=1" },
    { title: "♪ Stxlkin - So Bitter (prod. Aura) ♪", src: "https://www.dropbox.com/scl/fi/7kkk9dw1g0lqhd8fvpgnd/Stxlkin-So-Bitter-prod.-Aura.mp3?rlkey=lp343so9nxfedieacf9ixwnr7&st=es59jn1v&raw=1" },
    { title: "♪ Puzzle - YES ♪", src: "https://www.dropbox.com/scl/fi/n1ryoxx6rg207cmj14zbg/Puzzle-YES.mp3?rlkey=lwlpbr9118f0kzp9fs6ce5860&st=ww2etl4c&raw=1" },
    { title: "♪ Puzzle - I Saw An Angel ♪", src: "https://www.dropbox.com/scl/fi/454lj15rlv9onqt09g6sh/Puzzle-I-Saw-An-Angel-Official-Music-Video.mp3?rlkey=kf60aa7bkkjuo2wberh8sai6m&st=ocy8g4a0&raw=1" },
    { title: "♪ Lzie - osz7 ♪", src: "https://www.dropbox.com/scl/fi/6wspqf9dpsv7g9v1y0ys2/Breakcore-Lzie-osz7.mp3?rlkey=dgv1gcmbh6mltet1xdvouedhu&st=vksfa98m&raw=1" },
    { title: "♪ Rio Romeo - Over & Over ♪", src: "https://www.dropbox.com/scl/fi/vftrgoge3l3bjadsx2uyw/Over-Over.mp3?rlkey=r66gp7l1qc7omcskewmdlzidz&st=zqjze6zc&raw=1" },
    { title: "♪ Machine Girl - Athoth a Go!! Go!! ♪", src: "https://www.dropbox.com/scl/fi/tqsz2y0wdgm2q217ph77z/Athoth-a-Go-Go.mp3?rlkey=tjbarj9mvhfy11ryzfeb7r1nh&st=j1a6p75r&raw=1" },
    { title: "♪ My Chemical Romance - The World Is Ugly ♪", src: "https://www.dropbox.com/scl/fi/uhcz8im693aeror7jqxor/My-Chemical-Romance-The-World-Is-Ugly-Official-Audio.mp3?rlkey=qoiei770yyur1v901435srg3r&st=f2cnqx13&raw=1" },
    { title: "♪ Alex G - Harvey ♪", src: "https://www.dropbox.com/scl/fi/4hse1lgjfjmugwmk7odtj/Alex-G-Harvey-Lyric-video.mp3?rlkey=m304px7zubdolr4ugom9gnq1u&st=24u5gghl&raw=1" }
  ];

  let currentSong = 0;
  let isPlaying = false;
  let particleInterval;

  const audio = document.getElementById('audio-player');
  const cdDisc = document.getElementById('cd-disc');
  const trackName = document.getElementById('track-name');
  const volumeSlider = document.getElementById('volume-slider');
  const particleZone = document.getElementById('particle-zone');
  
  audio.volume = 0.1;

  cdDisc.addEventListener('click', () => {
    cdDisc.classList.add('inserted');
    loadSong(currentSong);
    playMusic();
  });

function loadSong(index) {
  audio.src = playlist[index].src;
  
  const track = document.getElementById('marquee-track');
  const texts = document.querySelectorAll('.track-text');
  
  texts.forEach(span => {
    span.innerText = playlist[index].title;
  });

  const textWidth = texts[0].offsetWidth;
  
  const speed = 70; 
  const duration = textWidth / speed;

  track.style.animation = 'none';
  void track.offsetWidth; // Trigger reflow
  track.style.animation = `smoothScroll ${duration}s linear infinite`;
}

  function playMusic() {
    audio.play();
    isPlaying = true;
    document.querySelector('.lcd-screen').classList.remove('paused');
    startParticles();
  }

  function pauseMusic() {
    audio.pause();
    isPlaying = false;
    document.querySelector('.lcd-screen').classList.add('paused');
    clearInterval(particleInterval);
  }

  document.getElementById('btn-pause').addEventListener('click', () => {
    if (!cdDisc.classList.contains('inserted')) return;
    if (audio.paused) playMusic();
    else pauseMusic();
  });

  document.getElementById('btn-next').addEventListener('click', nextSong);
  document.getElementById('btn-prev').addEventListener('click', prevSong);

  function nextSong() {
    if (!cdDisc.classList.contains('inserted')) return;
    currentSong = (currentSong + 1) % playlist.length;
    loadSong(currentSong);
    playMusic();
  }

  function prevSong() {
    if (!cdDisc.classList.contains('inserted')) return;
    currentSong = (currentSong - 1 + playlist.length) % playlist.length;
    loadSong(currentSong);
    playMusic();
  }

  audio.addEventListener('ended', nextSong);

document.getElementById('btn-stop').addEventListener('click', () => {
    pauseMusic();
    audio.currentTime = 0;
    currentSong = 0;
    cdDisc.classList.remove('inserted');

    const texts = document.querySelectorAll('.track-text');
    texts.forEach(span => {
      span.innerText = "INSERT DISC TO PLAY";
    });

    const track = document.getElementById('marquee-track');
    const textWidth = texts[0].offsetWidth;
    const speed = 30;
    const duration = textWidth / speed;

    track.style.animation = 'none';
    void track.offsetWidth; 
    track.style.animation = `smoothScroll ${duration}s linear infinite`;
    
    document.querySelector('.lcd-screen').classList.add('paused');
});

  volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
  });

function startParticles() {
  clearInterval(particleInterval);
  
  const myColors = ['#FFDBE8', '#FFF5A9', '#D8F197', '#B8EEFF', '#E1DAFF'];

  particleInterval = setInterval(() => {
    if (!isPlaying) return;
    
    const note = document.createElement('div');
    note.classList.add('music-note');
    
    const notes = ['♪', '♬', '♫'];
    note.innerText = notes[Math.floor(Math.random() * notes.length)];
    
    const randomColor = myColors[Math.floor(Math.random() * myColors.length)];
    note.style.color = randomColor;
    
    note.style.left = Math.random() * 80 + '%';
    
    particleZone.appendChild(note);
    
    setTimeout(() => note.remove(), 2000);
  }, 600);
}
});
