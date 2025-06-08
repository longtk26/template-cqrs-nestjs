import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { CqrsModule } from '@nestjs/cqrs';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [CqrsModule.forRoot(), UserModule, InfrastructureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
