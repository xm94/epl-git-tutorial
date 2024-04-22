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

export class player{
    name: string;
    spell: string;
    manaLevel: number;

    constructor(name:string, spell:string, manaLevel:number){
        this.name = name;
        this.spell = spell;
        this.manaLevel = manaLevel;
    }
}