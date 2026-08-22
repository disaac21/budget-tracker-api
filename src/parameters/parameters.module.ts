import { Module } from '@nestjs/common';
import { AccountsController } from './accounts/accounts.controller';
import { AccountsService } from './accounts/accounts.service';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import { CurrenciesController } from './currencies/currencies.controller';
import { CurrenciesService } from './currencies/currencies.service';
import { PaymentMethodsController } from './payment-methods/payment-methods.controller';
import { PaymentMethodsService } from './payment-methods/payment-methods.service';
import { TransactionStatusesController } from './transaction-statuses/transaction-statuses.controller';
import { TransactionStatusesService } from './transaction-statuses/transaction-statuses.service';
import { TransactionTypesController } from './transaction-types/transaction-types.controller';
import { TransactionTypesService } from './transaction-types/transaction-types.service';

@Module({
  controllers: [
    AccountsController,
    CategoriesController,
    CurrenciesController,
    PaymentMethodsController,
    TransactionStatusesController,
    TransactionTypesController,
  ],
  providers: [
    AccountsService,
    CategoriesService,
    CurrenciesService,
    PaymentMethodsService,
    TransactionStatusesService,
    TransactionTypesService,
  ],
})
export class ParametersModule {}
