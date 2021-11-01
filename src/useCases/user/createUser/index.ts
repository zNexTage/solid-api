import MailtrapMailProvider from "../../../providers/implementations/MailtrapMailProvider";
import UserRepository from "../../../repositories/implementations/UserRepository";
import CreateUserController from "./CreateUserController";
import CreateUserUserCase from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider();
const userRepository = new UserRepository();

const createUserUseCase = new CreateUserUserCase(userRepository, mailtrapMailProvider);

const createUserController = new CreateUserController(createUserUseCase);

export default createUserController;

export { createUserUseCase }
