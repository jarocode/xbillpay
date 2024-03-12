import { Module } from '@nestjs/common';

import { AgentsController } from './agents.controller';
import { NatsClientModule } from 'src/nats-client/nats-client.module';

@Module({
  imports: [NatsClientModule],
  controllers: [AgentsController],
  providers: [],
})
export class AgentsModule {}
