import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Wallet } from 'src/typeorm/entities/Wallet';
import { WalletsMicroServiceController } from './wallets.controller';
import { WalletsService } from './wallets.service';

@Module({
  imports: [TypeOrmModule.forFeature([Wallet])],
  controllers: [WalletsMicroServiceController],
  providers: [WalletsService],
})
export class AgentsModule {}
