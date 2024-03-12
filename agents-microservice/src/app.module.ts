import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AgentsModule } from './agents/agents.module';
import { Agent } from './typeorm/entities/Agent';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3307,
      database: 'xbillpay_db',
      entities: [Agent],
      synchronize: true,
      username: 'testuser',
      password: 'testuser123',
    }),
    AgentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
