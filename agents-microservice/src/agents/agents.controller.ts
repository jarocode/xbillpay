import { Controller, BadRequestException } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { CreateAgentDto } from './dtos/CreateAgent.dto';
import { AgentsService } from './agents.service';
import { SignInDto } from 'src/auth/dtos/SignIn.dto';

@Controller()
export class AgentsMicroServiceController {
  constructor(private agentsService: AgentsService) {}
  @MessagePattern({ cmd: 'createAgent' })
  createAgent(@Payload() data: CreateAgentDto) {
    try {
      this.agentsService.createAgent(data);

      return {
        message: 'Agent account created successfully!',
        data: null,
        status: 'success',
      };
    } catch (error) {
      console.error('error', error);
      if (error instanceof BadRequestException) {
        throw error; // Re-throw for NestJS handling
      }
      return {
        message: error,
        data: null,
        status: 'failed',
      };
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
      if (error instanceof BadRequestException) {
        throw error; // Re-throw for NestJS handling
      }
      return {
        message: error,
        data: null,
        status: 'failed',
      };
    }
  }
}
