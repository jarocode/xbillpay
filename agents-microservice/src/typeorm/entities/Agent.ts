import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  // BeforeInsert,
  // BeforeUpdate,
} from 'typeorm';

@Entity({ name: 'agents' })
export class Agent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  phone_number: string;

  // @Column({ nullable: false, select: false })
  @Column({ nullable: false })
  password: string;

  // @BeforeInsert()
  // @BeforeUpdate()
  // async hashPassword() {
  //   if (this.password) {
  //     this.password = await bcrypt.hash(this.password, 10); // Adjust rounds as needed
  //   }
  // }
}
