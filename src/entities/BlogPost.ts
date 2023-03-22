import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class BlogPost {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  body!: string;

  @ManyToOne(() => User, (user) => user.blogPosts)
  user!: User;

  // add any other fields as needed
}
