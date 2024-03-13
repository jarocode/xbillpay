import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, BadRequestException } from '@nestjs/common';
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
    const agent = await this.findAgent(createAgentDto.email);
    if (agent) throw new BadRequestException('email already exists');
    const { password } = createAgentDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    createAgentDto.password = hashedPassword;
    const newAgent = this.agentRepository.create(createAgentDto);
    return this.agentRepository.save(newAgent);
  }

  async findAgent(email: string): Promise<Agent> {
    return this.agentRepository.findOneBy({ email });
  }

  async signInAgent(signInDto: SignInDto) {
    const agent = await this.findAgent(signInDto.email);
    if (!agent) {
      throw new BadRequestException('this agent does not exist!');
    }
    const isPasswordValid = bcrypt.compareSync(
      signInDto.password,
      agent.password,
    );

    if (!isPasswordValid) throw new BadRequestException('password is invalid');

    const token = await this.authService.generateJwtToken(signInDto);
    console.log('token', token);
    const data = { ...token, ...agent };
    return data;
  }
}
