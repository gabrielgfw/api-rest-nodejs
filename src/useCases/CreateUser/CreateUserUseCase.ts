import { IUsersRepository } from "../../repositories/IUsersRepository";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute() {
    const userAlreadyExists = await this.usersRepository.findByEmail();
  }
}