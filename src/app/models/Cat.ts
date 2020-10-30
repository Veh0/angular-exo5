export class Cat {

    private _id:number;
    private _name:string;
    private _race:string;
    private _age:number;
    private _alife:boolean;

    constructor(id:number, name:string, race:string, age:number, alife:boolean) {
        this._id = id;
        this._race = race;
        this._name = name;
        this._age = age;
        this._alife = alife;
    }

    // GETTERS AND SETTERS

    /* ID */
    get id() : number {
        return this._id
    }
    set id(id:number) {
        this._id = id
    }
    /* NAME */
    get name() : string {
        return this._name
    }
    set name(name:string) {
        this._name = name
    }
    /* RACE */
    get race() : string {
        return this._race
    }
    set race(race:string) {
        this._race = race
    }
    /* AGE */
    get age() : number {
        return this._age
    }
    set age(age:number) {
        this._age = age
    }
    /* ALIFE */
    get alife() : boolean {
        return this._alife
    }
    set alife(alife:boolean) {
        this._alife = alife
    }
}