import { Router } from "express";
import createUserController from "./useCases/user/createUser";

const router = Router();

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

export default router;
;