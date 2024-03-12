import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateAgentDto } from './dtos/CreateAgent.dto';
import { AgentsService } from './agents.service';

@Controller()
export class AgentsMicroServiceController {
  constructor(private agentsService: AgentsService) {}
  @MessagePattern({ cmd: 'createAgent' })
  createAgent(@Payload() data: CreateAgentDto) {
    try {
      this.agentsService.createAgent(data);
      return {
        message: 'Agent account created successfully!',
        data,
        status: 'success',
      };
    } catch (error) {
      console.error('error', error);
      return {
        message: error,
        data: null,
        status: 'failed',
      };
    }
  }
}
