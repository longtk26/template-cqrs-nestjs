import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CqrsModule } from '@nestjs/cqrs';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ConfigAppModule } from './config/config.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    CqrsModule.forRoot(),
    InfrastructureModule,
    UserModule,
    ConfigAppModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
