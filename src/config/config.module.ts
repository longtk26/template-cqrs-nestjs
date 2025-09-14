import { Global, Module } from '@nestjs/common';
import { ConfigAppService } from './config.service';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [ConfigModule.forRoot()],
  providers: [ConfigAppService],
  exports: [ConfigAppService],
})
export class ConfigAppModule {}
