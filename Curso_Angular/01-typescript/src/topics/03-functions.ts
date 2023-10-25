// tipos de funciones 
function addNumbers(a: number, b: number) {

    return a + b;


}

const addNumbersArrow = (a: number, b: number):string => {
    return `${a+b}`;
} 
function multiply(firstnumber:number,secondnumber?:number,base:number=2){
    return firstnumber+base;

}
//-----------------------------------------------------------------------------------------------------------------------------



interface character{
    name:string;
    hp:number;
    showHp:()=>void;
}

// puedo crearme una interfaz en la que luego le puedo poner que el tipo de dato es la interfaz
const healcharacter= (character:character,amount:number) =>{
    character.hp +=amount;
    // character.hp = character.hp + amount
    
}

const strider: character={
    name:'Strider',
    hp:50,
    showHp(){
        console.log(`puntos de vida${this.hp}`);
    }
    
}

healcharacter(strider,10);
healcharacter(strider,10);
strider.showHp();

  
// addNumbers(1, 2);
// const result: number = addNumbers(3, 4);
// const result2: string = addNumbersArrow(3, 4); 
// const multiplyresult:number=multiply(5);

// console.log(result);
// console.log({ result,result2,multiplyresult });
// console.log({ result2 });
// console.log({ result2 });





export { };