import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { Agent } from 'src/typeorm/entities/Agent';
import { CreateAgentDto } from './dtos/CreateAgent.dto';

@Injectable()
export class AgentsService {
  constructor(
    @InjectRepository(Agent) private agentRepository: Repository<Agent>,
  ) {}
  createAgent(createAgentDto: CreateAgentDto) {
    const newAgent = this.agentRepository.create(createAgentDto);
    return this.agentRepository.save(newAgent);
  }
}
