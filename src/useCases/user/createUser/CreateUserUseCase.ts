import User from "../../../entities/User";
import IMailProvider from "../../../providers/IMailProvider";
import IUserRepository from "../../../repositories/IUserRepository";
import ICreateUserRequestDTO from "./CreateUserDTO";

//Possui a ÚNICA responsabilidade de criar um usuário
class CreateUserUserCase {
    //Atende ao principio Liskov Substitution Principle
    //O usersRepository não se importa qual será o banco de dados ou repositório. Ele só precisa que o objeto passado respeite os métodos da interface IUserRepository.    
    private usersRepository: IUserRepository;

    private mailProvider: IMailProvider;

    constructor(usersRepository: IUserRepository, mailProvider: IMailProvider) {
        this.usersRepository = usersRepository;
        this.mailProvider = mailProvider;
    }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new Error('User already exists');
        }

        const user = new User(data);

        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: 'Equipe Legal',
                email: 'equipe@meuapp.com'
            },
            subject: 'Seja bem-vindo a plataforma',
            body: '<p>Você já pode fazer login em nossa plataforma.</p>'
        });
    }
}

export default CreateUserUserCase;