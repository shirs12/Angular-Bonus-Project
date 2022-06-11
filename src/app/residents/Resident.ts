import Person from "../Person";

export default class Resident extends Person{
    
    private _address : string;
    public get address() : string {
        return this._address;
    }
    public set address(v : string) {
        this._address = v;
    }
    
    private _year : number;
    public get year() : number {
        return this._year;
    }
    public set year(v : number) {
        this._year = v;
    }
    
    private _status : string;
    public get status() : string {
        return this._status;
    }
    public set status(v : string) {
        if(v == 'A' || v == 'B' || v == 'C' || v == 'D')
            this._status = v;
        else console.log('please enter a valis status between A to D');
    }
    
    constructor(address:string, year:number, status:string, id:number, name:string, age:number, gender:boolean, city:string='Jerusalem', img:string){
        super(id,name,age,gender,city,img);
        this._address = address;
        this._year = year;
        this._status = status;
    }
}