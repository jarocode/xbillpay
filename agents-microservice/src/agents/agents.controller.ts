import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateAgentDto } from './dtos/CreateAgent.dto';
import { AgentsService } from './agents.service';

@Controller()
export class AgentsMicroServiceController {
  constructor(private agentsService: AgentsService) {}
  @MessagePattern({ cmd: 'createAgent' })
  createAgent(@Payload() data: CreateAgentDto) {
    this.agentsService.createAgent(data);
    console.log(data);
    return data;
  }
}
