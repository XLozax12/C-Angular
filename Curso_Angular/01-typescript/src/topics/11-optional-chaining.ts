


export interface Passenger{
    name:string;
    children?:string[];

}

const Passenger1:Passenger={
    name:'fernando',
}
const Passenger2:Passenger={
    name:'Carlos',
    children:['Natalia','Maria']

}

const printChildren=( Passenger:Passenger)=>{
    
    const howManyChildren =Passenger.children?.length || 0; /*? si existe dame el.legth sino tiene 0 hijos ,con un if se ve mas clasro */ 
    // si le pongo ! en vez de ? es que siempre le va a llegar el children y hariamos return howmanychildren 
    // y con un if ponerle que si no tiene es 0
    // const howManyChildren =Passenger.children!.length;
    return console.log(Passenger.name,howManyChildren);

}

printChildren(Passenger1);
