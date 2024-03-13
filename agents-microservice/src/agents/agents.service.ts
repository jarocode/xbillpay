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
      this.agentRepository.save(newAgent);
      return {
        message: 'Agent account created successfully!',
        data: createAgentDto,
        status: 'success',
      };
    } catch (error) {
      console.error('error:', error);
      return {
        message: error,
        data: null,
        status: 'failed',
      };
    }
  }

  async signInAgent(signInDto: SignInDto) {
    try {
      const token = await this.authService.generateJwtToken(signInDto);
      console.log('token', token);
      const data = { ...token, ...signInDto };
      return {
        message: 'you have been signed in  successfully!',
        data,
        status: 'success',
      };
    } catch (error) {
      console.error('error:', error);
      return {
        message: error,
        data: null,
        status: 'failed',
      };
    }
  }
}
