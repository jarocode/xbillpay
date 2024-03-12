import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { CreateAgentDto } from './dtos/CreateAgent.dto';

@Controller('agents')
export class AgentsController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @Get()
  getAgent() {
    return 'hello world';
  }

  @Post()
  createAgent(@Body() createAgentDto: CreateAgentDto) {
    console.log(createAgentDto);
    return this.natsClient.send({ cmd: 'createAgent' }, createAgentDto);
  }
}
