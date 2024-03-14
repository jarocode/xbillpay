import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { CreateAgentDto } from './dtos/CreateAgent.dto';
import { AgentsService } from './agents.service';
import { SignInDto } from 'src/auth/dtos/SignIn.dto';

@Controller()
export class AgentsMicroServiceController {
  constructor(private agentsService: AgentsService) {}
  @MessagePattern({ cmd: 'createAgent' })
  async createAgent(@Payload() data: CreateAgentDto) {
    try {
      console.log('begin create controller');
      await this.agentsService.createAgent(data);

      return {
        message: 'Agent account created successfully!',
        data: null,
        status: 'success',
      };
    } catch (error) {
      console.error('error', error);
      throw error;
    }
  }
  @MessagePattern({ cmd: 'signinAgent' })
  async signinAgent(@Payload() data: SignInDto) {
    try {
      const agentDataWithToken = await this.agentsService.signInAgent(data);

      return {
        message: 'you have been signed in  successfully!',
        data: agentDataWithToken,
        status: 'success',
      };
    } catch (error) {
      console.error('error', error);
      throw error;
    }
  }
}
