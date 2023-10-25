import { setupCounter } from '../counter';
/*
    ===== Código de TypeScript =====
*/


// tarea
interface SuperHero{
    name:string;
    age:number;
    // address:any;
    address:Address;
    //{
        // calle: string,
        // pais:string ,
        // ciudad:string 
        
    //}
    showAddress:()=>string; //void
}

interface Address{
    streeet: string,//fn f2 y se te cambia el nombre de todas las variables cone se nombre
    pais:string ,
    city:string ;

}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        streeet: 'Main St',
        pais: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.pais;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};