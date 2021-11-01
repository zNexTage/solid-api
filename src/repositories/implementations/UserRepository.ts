import User from "../../entities/User";
import IUserRepository from "../IUserRepository";

class UserRepository implements IUserRepository {
    private users: Array<User> = [];

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(u => u.email == email);

        return user;
    }
    async save(user: User): Promise<void> {
        this.users.push(user);
    }

}

export default UserRepository;