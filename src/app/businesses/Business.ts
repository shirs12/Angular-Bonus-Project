export default class Business{
    
    private _jobType : string;
    public get jobType() : string {
        return this._jobType;
    }
    public set jobType(v : string) {
        this._jobType = v;
    }

    
    private _businessNum : number;
    public get businessNum() : number {
        return this._businessNum;
    }
    public set businessNum(v : number) {
        if(v >= 1000 && v <= 5000)
            this._businessNum = v;
        else console.log('enter a valid business number - between 1000 to 5000'); 
    }

    
    private _employeeAmount : number;
    public get employeeAmount() : number {
        return this._employeeAmount;
    }
    public set employeeAmount(v : number) {
        this._employeeAmount = v;
    }
    
    
    private _avgMonthlyProfit : number;
    public get avgMonthlyProfit() : number {
        return this._avgMonthlyProfit;
    }
    public set avgMonthlyProfit(v : number) {
        this._avgMonthlyProfit = v;
    }

    constructor(jobType:string, businessNum:number, employeeAmount:number, avgMonthlyProfit:number) {
        this._jobType = jobType;
        this._businessNum = businessNum;
        this._employeeAmount = employeeAmount;
        this._avgMonthlyProfit = avgMonthlyProfit;
    }
    
    
    
}