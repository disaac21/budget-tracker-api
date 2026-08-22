import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { TransactionsModule } from './transactions/transactions.module';
import { BalanceModule } from './balance/balance.module';
import { ParametersModule } from './parameters/parameters.module';

@Module({
  imports: [PrismaModule, TransactionsModule, BalanceModule, ParametersModule],
})
export class AppModule {}
