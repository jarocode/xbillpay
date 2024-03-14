import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AgentsMicroServiceController } from './agents.controller';
import { AgentsService } from './agents.service';
import { Agent } from 'src/typeorm/entities/Agent';
import { AuthModule } from 'src/auth/auth.modules';
import { NatsClientModule } from 'src/nats-client/nats-client.module';

@Module({
  imports: [AuthModule, NatsClientModule, TypeOrmModule.forFeature([Agent])],
  controllers: [AgentsMicroServiceController],
  providers: [AgentsService],
})
export class AgentsModule {}
