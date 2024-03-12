import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AgentsMicroServiceController } from './agents.controller';
import { AgentsService } from './agents.service';
import { Agent } from 'src/typeorm/entities/Agent';

@Module({
  imports: [TypeOrmModule.forFeature([Agent])],
  controllers: [AgentsMicroServiceController],
  providers: [AgentsService],
  exports: [],
})
export class AgentsModule {}
