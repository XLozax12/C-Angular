
export interface Product {
    description: string;
    price: number;
}
const phone: Product = {
    description: 'iphone15pro',
    price: 1200
}
const tablet: Product = {
    description: 'ipad mini',
    price: 1000

}

interface TaxCalculationOptions{
    tax:number;
    products:Product[];
}

export function taxCalculation(options:TaxCalculationOptions): number[] {
    let total=0;
    options.products.forEach(products =>{
        total=total+products.price;
        // total+=products.price;
        
    });
    return [total,total*options.tax];

}

const shoppingCart=[phone,tablet];
const tax=0.15;

const result=taxCalculation({
    products:shoppingCart,
    tax:tax,
});
// const result2=taxCalculation(shoppingCart,tax);

// console.log('total',result[0]);
// console.log('total',result[1]);














// export { };