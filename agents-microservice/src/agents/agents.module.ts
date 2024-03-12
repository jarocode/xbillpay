import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AgentsMicroServiceController } from './agents.controller';
import { AgentsService } from './agents.service';
import { Agent } from 'src/typeorm/entities/Agent';
import { AuthModule } from 'src/auth/auth.modules';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Agent])],
  controllers: [AgentsMicroServiceController],
  providers: [AgentsService],
})
export class AgentsModule {}
