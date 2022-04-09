import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { Users } from './entity/user.entity';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UsersService {
  constructor(private userRepositoty: UserRepository) {}

  async createUser(dto: UserDTO): Promise<Users> {
    try {
      const { name } = dto;
      const userExists = await this.userRepositoty.getOneUser(name);
      if (userExists) {
        throw new HttpException('User already exists!', HttpStatus.BAD_REQUEST);
      }
      const user = await this.userRepositoty.createUser(dto);
      return user;
    } catch (error) {
      if (error instanceof HttpException) {
        throw new HttpException({ message: error.message }, error.getStatus());
      }

      throw new HttpException(
        'Something wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getUsers(): Promise<Users[]> {
    try {
      const users = await this.userRepositoty.getUsers();
      return users;
    } catch (error) {
      console.log(error)
      throw new HttpException(
        'Something wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
