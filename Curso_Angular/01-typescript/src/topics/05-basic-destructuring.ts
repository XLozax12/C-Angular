interface audioPlayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details: Details;

}
interface Details{
    author:string;
    year:number;
}

const audioplayer:audioPlayer={
    audioVolume: 90,
    songDuration: 20,
    song: "Sin señal",
    details: {
        author:'quevedo',
        year:2015

    }
}

// asi es mejor que lo de abajo
// cancion es para renombrarlo no nhace falta
const{song:cancion,songDuration:duration/*,details:{author}*/,details}=audioplayer;
const{author}=details;

//  console.log('Song',cancion);
//  console.log('duration',duration);
//  console.log('autor',author);
//  console.log(`autor ${author}`);


// repetitivo
// console.log('Song',audioplayer.song);
// console.log('author',audioplayer.details.author);

//------------------------------------------------------------------------------------------------------------

const dbz:string[]=['goku','vegeta','trunk'];

const trunk=dbz[3]||'no hay personaje';
// la mejor opcion es 
const [ , , trunks]:string[]=['goku','vegeta','trunk'];
console.log('personaje 3 :',trunk);
// tambien se puede hacer
console.log('personaje 3 :',dbz[2]||'no hay personaje');
console.log('personaje 3 :',trunks);







export{};