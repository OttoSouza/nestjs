import { EntityRepository, Repository } from 'typeorm';
import { UserDTO } from '../dto/user.dto';
import { Users } from '../entity/user.entity';

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {
  async createUser(dto: UserDTO): Promise<Users> {
    const user = this.create(dto);
    return this.save(user);
  }

  async getOneUser(name: string): Promise<Users> {
    return this.findOne({where: {name}})
  }

  async getUsers(): Promise<Users[]> {
    return this.find()
  }
}

