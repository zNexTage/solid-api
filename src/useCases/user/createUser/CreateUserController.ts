import { Response, Request } from "express";
import CreateUserUserCase from "./CreateUserUseCase";

class CreateUserController {
    private createUserUseCase: CreateUserUserCase;

    constructor(createUserUseCase: CreateUserUserCase) {
        this.createUserUseCase = createUserUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        try {
            await this.createUserUseCase.execute({
                name, email, password
            });

            return response.status(204).send();
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            })
        }
    }
}

export default CreateUserController;