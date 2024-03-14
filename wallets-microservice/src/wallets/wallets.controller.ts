import { Controller, BadRequestException } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { CreateWalletDto } from './dtos/CreateWallet.dto';
import { WalletsService } from './wallets.service';

@Controller()
export class WalletsMicroServiceController {
  constructor(private walletsService: WalletsService) {}
  @EventPattern('createWallet')
  async createWallet(@Payload() data: CreateWalletDto) {
    try {
      await this.walletsService.createWallet(data);
    } catch (error) {
      if (error instanceof BadRequestException) {
        console.log('bad request error:', error?.getResponse());
        const errorResponse = error.getResponse();
        return errorResponse;
      }
      throw error;
    }
  }
}
