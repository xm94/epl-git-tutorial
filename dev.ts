export class Developer{
    name: string;
    languages: string[];
    specialization: string|null;

    constructor(name:string, languages:string[],specialization:string|null){
        this.name=name;
        this.languages=languages;
        this.specialization=specialization;
    }

}