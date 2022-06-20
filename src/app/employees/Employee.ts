import Person from "../Person";

export default class Employee extends Person{
    
    private _jobType : string;
    public get jobType() : string {
        return this._jobType;
    }
    public set jobType(v : string) {
        this._jobType = v;
    }
    

    private _monthlyHours : number;
    public get monthlyHours() : number {
        return this._monthlyHours;
    }
    public set monthlyHours(v : number) {
        this._monthlyHours = v;
    }
    
    
    private _hourlyRate : number;
    public get hourlyRate() : number {
        return this._hourlyRate;
    }
    public set hourlyRate(v : number) {
        this._hourlyRate = v;
    }
    
    
    constructor(jobType:string, monthlyHours:number, hourlyRate:number, id:number, name:string, age:number, gender:boolean, city:string='Jerusalem', img:string){
        super(id,name,age,gender,city,img);
        this._jobType = jobType;
        this._monthlyHours = monthlyHours;
        this._hourlyRate = hourlyRate;
    }
    
    
}