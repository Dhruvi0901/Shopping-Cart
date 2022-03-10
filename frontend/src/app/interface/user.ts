export class User {
    email?:string;
    password?: Number;
    name?: String;
    phone?: Number;
    role?: String;
    profileId?:Number;
    token ?:any;
}

export class Product{
    profileId?: Number;
    productId?: Number;
    productName?: String;
    image?: String;
    description?: String;
    quantity?: Number;
    price?: Number;
    status?:String;
    createdDate?:String;
    sellerName?:String;    
}

export class Cart{
    profileId?: Number;
    productId?: Number;
    productName?: String;
    quantity?: Number;
    price?:Number
}

export class Placeorder{
    profileId?: Number;
    total?:String;
}
