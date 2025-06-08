import { Module } from '@nestjs/common';
import { ClsInfraModule } from './cls/cls.module';
import { PersistenceModule } from './persistence/persistence.module';

@Module({
  imports: [ClsInfraModule, PersistenceModule],
})
export class InfrastructureModule {}
