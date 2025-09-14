import { Module } from '@nestjs/common';
import { PersistenceUserModule } from './persistence/persistence.module';

@Module({
  imports: [PersistenceUserModule],
})
export class InfrastructureUserModule {}
