import { MailtrapMailProvider } from "../../providers/implementation/MailtrapMailProvider";
import { PostgresUserRespository } from "../../repositories/implementation/PostgresUserRespository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUserRepository = new PostgresUserRespository();

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepository,
  mailtrapMailProvider,
)

const createUserController = new CreateUserController(
  createUserUseCase,
)

export { createUserUseCase, createUserController }