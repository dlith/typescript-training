class Customer{

    constructor(private _firstName:string, private _lastName:string){
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
}

//instance of customer
let myCustomer = new Customer("Susan", "Public");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);