
// en la llave solo te va a dejar producto ya que es la unica que le has puesto el export
// despues e exportado tambien la funcion
import{Product,taxCalculation} from './06-funtion-destructuring';
 
const shoppingCart:Product[]=[
    {

        description:'nokia',
        price:789
    },
    {
        description:'ipad',
        price:838

    }

];


const [total,tax]=taxCalculation({
    products:shoppingCart,
    tax:0.15,
});


console.log('total',total);
console.log('tax',tax);