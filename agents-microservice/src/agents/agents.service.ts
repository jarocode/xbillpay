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
  async createAgent(createAgentDto: CreateAgentDto) {
    // const agent = new Agent();
    // await agent.hashPassword();
    // createAgentDto.password = agent.password;
    // const newAgent = this.agentRepository.create(createAgentDto);
    // return this.agentRepository.save(newAgent);

    console.log('createagentData2:', createAgentDto);
    console.log(this.agentRepository);
  }
}
