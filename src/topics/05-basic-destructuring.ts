

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}
// const { 
//     song:anotherSong, 
//     songDuration:duration, 
//     details 
// } = audioPlayer;

// const { 
//     author:authorSong, 
//     year:yearSong 
// } = details;

// console.log(anotherSong)
// console.log(duration)
// console.log(authorSong)
// console.log(yearSong)

const [ , , trunks = 'Not found' ]: string[] = ['Goku', 'Vegeta'];
// const trunks = dbz[3] || 'No hay personaje';

console.log('Personaje 3:',trunks )



export {};