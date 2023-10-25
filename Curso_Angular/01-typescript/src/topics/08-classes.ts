
export class Person{
    public name:string;
    public address:string;

    constructor(name:string,address:string){
        this.name=name;
        this.address=address;

    }

}
 class Person2 extends Person{
    public name2:string;
    public address2:string;

    constructor(name2:string,address2:string,name:string,address:string){
        super(name,address);
        this.name2=name2;
        this.address2=address2;

    }

}

 class Hero /*extends Person*/{
    public alterEgo:string;
    public age:number;
    public realName:string;
    public Person:Person;

    constructor(alterEgo:string,age:number,realName:string,Person:Person){
        // super(name,address);
        this.alterEgo=alterEgo;
        this.age=age;
        this.realName=realName;
        this.Person=Person;
        // this.Person=new Person(realName,"pedro de mendoza");

    }

}

const Tony=new Person("Tony starrk","pedro de mendoza");

const ironman=new Hero("ironman",5,"tony",Tony);
console.log(ironman);

// voy por el video 24