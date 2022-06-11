export default class Person{
    
    private _id : number;
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        if(v.toString.length == 8 || v.toString.length == 9){
            this._id = v;
        }
        else console.log('please enter a valid id number');
    }

    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }
    
    
    private _age : number;
    public get age() : number {
        return this._age;
    }
    public set age(v : number) {
        if(v >= 0 || v <= 120){
            this._age = v;
        }
        else console.log('please enter a number between 0 to 120');
    }

    
    private _gender : boolean;
    public get gender() : boolean {
        return this._gender;
    }
    public set gender(v : boolean) {
        this._gender = v;
    }

    
    private _city : string;
    public get city() : string {
        return this._city;
    }
    public set city(v : string) {
        this._city = v;
    }
    
    
    private _img : string;
    public get img() : string {
        return this._img;
    }
    public set img(v : string) {
        this._img = v;
    }
    
    constructor(id:number, name:string, age:number, gender:boolean, city:string='Jerusalem', img:string){
        this._id = id;
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._city = city;
        this._img = img;
    }
    
    
}