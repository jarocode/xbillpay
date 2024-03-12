import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { Agent } from 'src/typeorm/entities/Agent';
import { AuthService } from 'src/auth/auth.service';
import { CreateAgentDto } from './dtos/CreateAgent.dto';
import { SignInDto } from 'src/auth/dtos/SignIn.dto';

@Injectable()
export class AgentsService {
  constructor(
    @InjectRepository(Agent) private agentRepository: Repository<Agent>,
    private authService: AuthService,
  ) {}
  async createAgent(createAgentDto: CreateAgentDto) {
    try {
      const { password } = createAgentDto;
      const hashedPassword = await bcrypt.hash(password, 10);
      createAgentDto.password = hashedPassword;
      const newAgent = this.agentRepository.create(createAgentDto);
      console.log('newAgent', newAgent);
      console.log('createAgentDto', createAgentDto);
      return this.agentRepository.save(newAgent);
    } catch (error) {
      console.error('error:', error);
    }
  }

  async signInAgent(signInDto: SignInDto) {
    try {
      console.log('signInDto', signInDto);
      const token = await this.authService.generateJwtToken(signInDto);
      console.log('token', token);
    } catch (error) {
      console.error('error:', error);
    }
  }
}
