import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { CreateAgentDto } from './dtos/CreateAgent.dto';
import { SignInAgentDto } from './dtos/SignInAgent.dto';

@Controller('agents')
export class AgentsController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @Get()
  getAgent() {
    return 'hello Nest!';
  }

  @Post('createAccount')
  createAgent(@Body() createAgentDto: CreateAgentDto) {
    try {
      console.log('creatDto-gateway', createAgentDto);
      return this.natsClient.send({ cmd: 'createAgent' }, createAgentDto);
    } catch (error) {
      throw error;
    }
  }

  @Post('signIn')
  @UsePipes(new ValidationPipe({ groups: ['Login'] })) // Apply LoginGroup
  signin(@Body() signinDto: SignInAgentDto) {
    return this.natsClient.send({ cmd: 'signinAgent' }, signinDto);
  }
}
