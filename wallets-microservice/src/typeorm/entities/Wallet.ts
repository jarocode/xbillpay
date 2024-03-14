import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'wallets' })
export class Wallet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  agent_id: string;

  @Column({ nullable: false })
  wallet_balance: number;
}
