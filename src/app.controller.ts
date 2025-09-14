import { Controller, Get } from '@nestjs/common';
import { ConfigAppService } from './config/config.service';
import { TAppConfig } from './config/config.types';

@Controller()
export class AppController {
  constructor(private readonly configAppService: ConfigAppService) {}

  @Get('health')
  healthCheck() {
    const appConfig: TAppConfig = this.configAppService.getAppConfig();
    console.log('App Config:', appConfig.port);
    return { status: 'ok' };
  }
}
