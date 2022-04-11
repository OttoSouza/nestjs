import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class UserDTO {
  @IsString({ message: 'Campo so recebe string' })
  name: string;
  @IsString({ message: 'Campo so recebe string' })
  @IsNotEmpty()
  password: string;
  
}
