import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { Users } from './entity/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post()
  async createUser(@Body() dto: UserDTO): Promise<Users> {
    return this.service.createUser(dto);
  }

  @Get("getAll")
  async listUsers(): Promise<Users[]> {
      return this.service.getUsers()
  }

}
