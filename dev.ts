export class Developer{
    name: string;
    language: string;
    specialization: string|null;

    constructor(name:string, language:string,specialization:string|null){
        this.name=name;
        this.language=name;
        this.specialization=specialization;
    }

}