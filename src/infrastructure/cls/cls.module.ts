import { Global, Module } from '@nestjs/common';
import { ClsModule } from 'nestjs-cls';
import { ClsPluginTransactional } from '@nestjs-cls/transactional';
import { TransactionalAdapterPrisma } from '@nestjs-cls/transactional-adapter-prisma';
import { PrismaService } from '../persistence/prisma/prisma.service';

@Global()
@Module({
  imports: [
    ClsModule.forRootAsync({
      useFactory: (prismaService: PrismaService) => ({
        plugins: [
          new ClsPluginTransactional({
            adapter: new TransactionalAdapterPrisma({
              prismaInjectionToken: prismaService,
            }),
          }),
        ],
        global: true,
        middleware: { mount: true },
      }),
      inject: [PrismaService],
    }),
  ],
})
export class ClsInfraModule {}
