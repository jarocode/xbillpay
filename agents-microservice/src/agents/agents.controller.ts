import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateAgentDto } from './dtos/CreateAgent.dto';
import { AgentsService } from './agents.service';
import { SignInDto } from 'src/auth/dtos/SignIn.dto';

@Controller()
export class AgentsMicroServiceController {
  constructor(private agentsService: AgentsService) {}
  @MessagePattern({ cmd: 'createAgent' })
  createAgent(@Payload() data: CreateAgentDto) {
    this.agentsService.createAgent(data);
  }

  @MessagePattern({ cmd: 'signinAgent' })
  async signinAgent(@Payload() data: SignInDto) {
    await this.agentsService.signInAgent(data);
  }
}
