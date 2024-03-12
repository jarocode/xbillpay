import { Module } from '@nestjs/common';

import { AgentsModule } from './agents/agents.module';

@Module({
  imports: [AgentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
