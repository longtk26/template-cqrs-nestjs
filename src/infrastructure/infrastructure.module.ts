import { Global, Module } from '@nestjs/common';
import { PersistenceModule } from './persistence/persistence.module';
import { ClsInfraModule } from './cls/cls.module';

@Global()
@Module({
  imports: [ClsInfraModule, PersistenceModule],
})
export class InfrastructureModule {}
