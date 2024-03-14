import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { Wallet } from 'src/typeorm/entities/Wallet';
import { CreateWalletDto } from './dtos/CreateWallet.dto';

@Injectable()
export class WalletsService {
  constructor(
    @InjectRepository(Wallet) private walletRepository: Repository<Wallet>,
  ) {}
  async createWallet(createWalletDto: CreateWalletDto) {
    console.log('walletData', createWalletDto);
  }
}
