import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigAppService {
  constructor(private readonly configService: ConfigService) {}

  getAppConfig() {
    return {
      port: this.configService.get<number>('PORT', 3000),
    };
  }
}
