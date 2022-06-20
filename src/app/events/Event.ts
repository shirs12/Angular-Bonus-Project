import Person from "../Person";

export default class Event{
    
    private _eventName : string;
    public get eventName() : string {
        return this._eventName;
    }
    public set eventName(v : string) {
        this._eventName = v;
    }

    
    private _code : number;
    public get code() : number {
        return this._code;
    }
    public set code(v : number) {
        if(this.code >= 300 || this.code <= 700)
            this._code = v;
        else console.log('enter a valid code, number between 300 to 700')
    }

    
    private _address : string;
    public get address() : string {
        return this._address;
    }
    public set address(v : string) {
        this._address = v;
    }

    
    private _participantsAmount : number;
    public get participantsAmount() : number {
        return this._participantsAmount;
    }
    public set participantsAmount(v : number) {
        if(this.participantsAmount > -1 || this.participantsAmount <= 500000)
            this._participantsAmount = v;
        else console.log('enter a valid participants amount number, number between 0 to 500000')
    }
    
    
    private _manager : Person;
    public get manager() : Person {
        return this._manager;
    }
    public set manager(v : Person) {
        this._manager = v;
    }
    
    
    constructor(eventName:string, code:number, eventAddress:string, participantsAmount:number, manager:Person){
        this._eventName = eventName;
        this._code = code;
        this._address = eventAddress;
        this._participantsAmount = participantsAmount;
        this._manager = manager;
    }
    
    
}