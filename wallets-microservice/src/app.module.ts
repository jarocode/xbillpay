import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WalletsModule } from './wallets/wallets.module';
import { Wallet } from './typeorm/entities/Wallet';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3307,
      database: 'xbillpay_db',
      entities: [Wallet],
      synchronize: true,
      username: 'testuser',
      password: 'testuser123',
    }),
    WalletsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
