import { Module } from '@nestjs/common';
import { ClsInfraModule } from './cls/cls.module';

@Module({
  imports: [ClsInfraModule],
})
export class InfrastructureModule {}
