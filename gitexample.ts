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

class UserProfile {
    username: string;
    email: string;
    bio: string;
    password: string;

    constructor(username: string, email: string, password: string) {
        this.username = username;
        this.email = email;
        this.bio = "";
        this.password = password;

    }
}