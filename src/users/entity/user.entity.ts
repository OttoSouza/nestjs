import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("users") 
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name: string;

  @Column()
  password: string;
}
