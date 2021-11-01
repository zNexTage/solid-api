import { uuid } from "uuidv4";

class User {
    public readonly id: string;
    public name: string;
    public email: string;
    public password: string;

    constructor({ name, email, password }: Omit<User, 'id'>, id?: string) {
        // Object.assign(this, props); Alternativa para evitar ficar fazendo this.name = name;....
        this.name = name;
        this.email = email;
        this.password = password;
        
        if (!id) {
            this.id = uuid();
        }
    }
}

export default User;