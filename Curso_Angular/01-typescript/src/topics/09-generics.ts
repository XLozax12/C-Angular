
// generics (<>ya lo convierte en generic)
// sirve porque si por ejemplo en argumento no sabes el tipo de dato que vas a escribir
// luego puedes especificar cuando lo uses con <> el tipo de dato que tiene que ser
// porq con any se lo traga todo
export function WhatsMyType<T>(argument:T):T{
    return argument;

}

let amIString=WhatsMyType<string>("hola mundo");
let amInumber=WhatsMyType<number>(100);
let amIarray=WhatsMyType<number[]>([1,2,3,4,5]);
console.log(amIString.split(' '));
console.log(amInumber.toFixed());
console.log(amIarray.join('-'));