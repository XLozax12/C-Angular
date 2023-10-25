 const skills:string[] =['bash','counter','healing']



 interface character{
    name:string;
    hp:number;
    skills:string[];
    hometownys?:string;
 }
const strider:character ={
    name:'Strider',
    hp:100,
    skills:['bash','counter']
}
strider.hometownys='holas';
console.table(strider); 


 export{};  