const movies = [
    {
        title: "Sinners",
        desc: "Mēģinot atstāt savu nemierīgo dzīvi, dvīņu brāļi atgriežas dzimtajā pilsētā, lai sāktu no jauna, tikai atklājot, ka vēl lielāks ļaunums gaida, lai viņus sagaidītu atpakaļ.",
        fullDesc: "Grēcinieki (2025), režisors Raiens Kūglers, ir dienvidu gotikas šausmu filma, kas norisinās 1932. gadā Misisipi, kur dvīņu brāļi atgriežas mājās, meklējot jaunu sākumu, tikai lai stātos pretī pārdabiskam ļaunumam, kas saistīts ar laikmeta rasismu un blūza mūzikas spēku. Apvienojot perioda drāmu, šausmu un mūzikas elementus, tas tiek slavēts par pārsteidzošajiem vizuālajiem materiāliem, bagātīgajām izrādēm un tematiskajām ambīcijām, lai gan daži uzskata, ka tā temps un fokuss ir nevienmērīgs.",
        director: "Raiens Kūglers",
        writer: "Raiens Kūglers",
        rating: "7,7/10",
        genre: "Trilleris, Šausmas",
        cast: "Michael B. Jordan, Hailee Steinfeld, Miles Caton, Jack O'Connell",
        image: "https://www.tvguide.com/a/img/catalog/provider/2/13/2-47d8b9e24067991374a616f734261ae4.jpg"
    },
    {
        title: "Flow",
        desc: "Kaķis ir vientuļš dzīvnieks, bet, tā kā tā mājas ir izpostījuši lieli plūdi, viņš atrod patvērumu laivā, kurā dzīvo dažādas sugas, un viņam būs jāapvienojas ar viņiem, neskatoties uz viņu atšķirībām.",
        fullDesc: "Straume, ir Ginta Zilbalodis režisora animācijas filma bez dialogiem, Latvijas, Francijas un Beļģijas kopražojums. Filmas pirmizrāde notika Kannu kinofestivālā 2024. gada maijā un ir saņēmusi kritiķu atzinību, iegūstot Kinoakadēmijas balvu par labāko animācijas filmu un Zelta globuss par labāko animācijas spēlfilmu, kas ir nozīmīgs sasniegums Latvijas kino.",
        director: "Gints Zilbalodis",
        writer: "Gints Zilbalodis, Matiss Kaza, Ron Dyens",
        rating: "7,8/10",
        genre: "Animācija, Piedzīvojumu, Fantāzija",
        cast: "Voice Cast",
        image: "https://theartsshelf.com/wp-content/uploads/2025/04/Flow-%C2%A9-Dream-Well-Studio.jpg"
    },
    {
        title: "Challengers",
        desc: "Tashi, bijušais tenisa brīnumbērns, kļuvis par treneri, pārvērta savu vīru par čempionu. Bet, lai pārvarētu neseno zaudējumu sēriju un izpirktu sevi, viņam būs jāsaskaras ar savu bijušo labāko draugu un Tashi bijušo draugu.",
        fullDesc: "Sāncenši (2024) ASV romantiskā sporta drāmas filma. Filmā galvenās lomas atveido Zendaja, Džošs O'Konors un Maiks Faists. Filma stāsta par zaudējumu sēriju māktu bijušo tenisa čempionu Ārtu Donaldsonu (Faists), kurš plāno atgriešanos ar savas sievas un treneres Taši Dankanas (Zendaja) palīdzību. Lai tas notiktu, viņam ir jāpieveic Patriku Cveigu (O'Konors), savu bijušo labāko draugu un bijušo Taši draugu.",
        director: "Luca Guadagnino",
        writer: "Justin Kuritzkes",
        rating: "7.0/10",
        genre: "Drāma, Romantika, Sports",
        cast: "Zendaya, Josh O'Connor, Mike Faist",
        video: "https://rr1---sn-jvhixh-5goe7.googlevideo.com/videoplayback?expire=1776462542&ei=blbiafztMN6y8uMPnMi_sAM&ip=82.29.235.65&id=o-AFZ7IG4FxW2KZ-ArzqIA7_3fqlixeZjZUtql-PTJeT5b&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&bui=AUUZDGKx-AaD6QH9OKsh8zLI2Vcyezj9aflPT6YcPTxH3cbt7LNNRPmOIZhpMwuMZAIE1gttq8EWcuMG&spc=jlWavawm7Ud2-tUXqDqWVZ59XbRW23Gf5JTek94mmrvivxowPQ0u2qgV4PZRLenMRH8&vprv=1&svpuc=1&xtags=heaudio%3Dtrue&mime=video%2Fmp4&rqh=1&cnr=14&ratebypass=yes&dur=142.152&lmt=1727607521175700&fexp=51565115,51565682&c=ANDROID&txp=4538434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cxtags%2Cmime%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AHEqNM4wRAIgHeVAoqPpC46BwfB4wkVBgY7CjIrLUmn0nqVeoiN8uRgCIA-TW6N8ryka_VizZkRmLXeDjAMtQu9t7ChjW-NBKc-P&rm=sn-q0cyyy7l&rrc=104,191&req_id=5f3516beff04a3ee&cps=101&ipbypass=yes&redirect_counter=2&cm2rm=sn-uxaxufv-gpml7l&cms_redirect=yes&cmsv=e&met=1776440951,&mh=b6&mip=5.241.141.116&mm=29&mn=sn-jvhixh-5goe7&ms=rdu&mt=1776440736&mv=m&mvi=1&pl=15&lsparams=cps,ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRAIgMXaqzJgTW6TANCXTn8ehzB-YaqLBntggFXB_vA9ZQt4CIFt-IWyzKTTcV_UgTJ0C_Zto-4t5-EEpSjWejBsym-F9",
        image: "https://talkingfilms.net/wp-content/uploads/2024/04/ch1.jpg"
    },
    {
        title: "The Substance",
        desc: "Izbalējoša slavenība lieto melnā tirgus narkotiku: šūnu replikējošu vielu, kas palīdz viņai izveidot jaunāku, labāku sevis versiju.",
        fullDesc: "Substance (2024) Holivudas fitnesa zvaigznei Elizabetei (Morai) ir viss, ko sieviete var vēlēties — skaistums, slava un ietekme. Taču pienāk laiks, kad vecuma pazīmes draud viņai to visu atņemt. Tādēļ brīdī, kad viņa uzzina par jauno produktu. Substance, kurš sola jaunāku un perfektāku sevi, viņa nevilcinās to izmēģināt. Tā pasaulē ierodas Sjū (Kvolija) — jauna un seksīga Elizabetes versija. Taču ir kāds noteikums, kurš jāievēro, lai viss ritētu gludi.",
        director: "Coralie Fargeat",
        writer: "Coralie Fargeat",
        rating: "7,2/10",
        genre: "Drāma, Fantāzija, Šausmas",
        cast: "Demi Moore, Margaret Qualley, Dennis Quaid",
        video: "https://rr4---sn-jvhixh-5goe7.googlevideo.com/videoplayback?expire=1776462612&ei=tFbiaa-3Cqy9zPsPsabEwAQ&ip=45.117.55.234&id=o-ABcuacTtfnJXmO2MDGBE5jlMJPi3rNZ7XMVHGyxNd9JX&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&bui=AUUZDGKVC5szuKu0uCNv5FHMQK57BrIsoiJw5wZpuW11LFY613YFp0e-Z6cro34_HTTAbXKXg3Rz1MPW&spc=jlWavcS-m3RaotXfDhhF8SV35ls-mCz6YgZLWl458GYEhvEbOeJ_djKyuwOWsCpTb2o&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=7411948&ratebypass=yes&dur=150.024&lmt=1748762130744500&fexp=51565115,51565682&c=ANDROID&txp=4538534&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AHEqNM4wRQIhAIYurcnEr9wqP8hSw22T2rMbb-EZMtV3lDJEYe7pjZ0fAiA36AcRySv6Yw9KbAlYlteDL_OJJOROl_jd52MTU7zUtg%3D%3D&rm=sn-4g5ers76&rrc=104,191&req_id=f5eedf239561a3ee&cps=46&ipbypass=yes&redirect_counter=2&cm2rm=sn-uxaxufv-gpmz7e&cms_redirect=yes&cmsv=e&met=1776441015,&mh=me&mip=5.241.141.116&mm=29&mn=sn-jvhixh-5goe7&ms=rdu&mt=1776440736&mv=m&mvi=4&pl=15&lsparams=cps,ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRAIgemCB5Ieln9DkqrmSMZKboOioEEWF61ppF-ynlJn8i48CIE5_qyqd3u-x9XbmmMhV1t0GB90OEz3aBfHNcZ6RGlhZ",
        image: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/07/the-substance-1.jpg"
    },
    {
        title: "Wicked",
        desc: "Elphaba, jauna sieviete, kas izsmieta par savu zaļo ādu, un Galinda, populāra meitene, kļūst par draugiem Šizas universitātē Oza zemē. Pēc tikšanās ar brīnišķīgo Oza burvi viņu draudzība nonāk krustcelēs.",
        fullDesc: "Ļaunā (2024) ASV muzikālā fantāzijas filma, kuras režisors ir Džons Ču, scenārija autori Vinnija Holcmane un Deina Foksa. Šī ir pirmā no Stīvena Švarca un Holcmanes tāda paša nosaukuma skatuves mūzikla divu daļu ekranizācijas, kas savukārt balstīta uz 1995. gada Gregorija Magvaira tāda paša nosaukuma romānu un Laimena Frenka Bauma 1900. gada romāna Brīnumainais burvis no Oza zemes",
        director: "Jon M. Chu",
        writer: "Winnie Holzman, Dana Fox",
        rating: "7,3/10",
        genre: "Muzikāla, Fantāzija, Drāma",
        cast: "Cynthia Erivo, Ariana Grande, Jeff Goldblum",
        image: "https://www.nme.com/wp-content/uploads/2024/11/Wicked-film-2024-1.jpg"
    }
];

function selectMovie(index) {
    currentMovieIndex = index;
    const movie = movies[index];
    document.getElementById("title").innerText = movie.title;
    document.getElementById("desc").innerText = movie.desc;
    document.getElementById("bg-video").src = movie.image;
    
    // Smooth scroll effect for banner
    document.querySelector(".banner").scrollIntoView({ behavior: "smooth" });
}

// More Info button functionality
const moreInfoBtn = document.querySelector(".btn-info");
const infoModal = document.getElementById("infoModal");
const infoClose = document.querySelector(".info-close");

moreInfoBtn.addEventListener("click", () => {
    const movie = movies[currentMovieIndex];
    document.getElementById("infoTitle").innerText = movie.title;
    document.getElementById("infoDesc").innerText = movie.fullDesc;
    document.getElementById("infoPoster").src = movie.image;
    document.getElementById("infoDirector").innerText = movie.director;
    document.getElementById("infoWriter").innerText = movie.writer;
    document.getElementById("infoRating").innerText = movie.rating;
    document.getElementById("infoGenre").innerText = movie.genre;
    document.getElementById("infoCast").innerText = movie.cast;
    
    infoModal.classList.add("active");
});

infoClose.addEventListener("click", () => {
    infoModal.classList.remove("active");
});

infoModal.addEventListener("click", (e) => {
    if (e.target === infoModal) {
        infoModal.classList.remove("active");
    }
});

// Play button functionality
const playBtn = document.getElementById("play");
const videoModal = document.getElementById("videoModal");
const videoPlayer = document.getElementById("videoPlayer");
const videoSource = document.getElementById("videoSource");
const videoClose = document.querySelector(".video-close");
let currentMovieIndex = 0;

playBtn.addEventListener("click", () => {
    const movie = movies[currentMovieIndex];
    videoSource.src = movie.video;
    videoPlayer.load();
    videoModal.classList.add("active");
});

videoClose.addEventListener("click", () => {
    videoModal.classList.remove("active");
    videoPlayer.pause();
});

videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove("active");
        videoPlayer.pause();
    }
});

// Header scroll effect
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

