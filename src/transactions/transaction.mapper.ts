import { Prisma } from '@prisma/client';

export const transactionSelect = {
  id: true,
  date: true,
  business: true,
  mandatory: true,
  amount: true,
  location: true,
  notes: true,
  created: true,
  created_by: true,

  category_transaction_categoryTocategory: {
    select: {
      name: true,
    },
  },

  account_transaction_accountToaccount: {
    select: {
      description: true,
    },
  },

  transaction_type: {
    select: {
      name: true,
    },
  },

  transaction_status: {
    select: {
      name: true,
    },
  },

  payment_method: {
    select: {
      name: true,
    },
  },

  currency_transaction_currencyTocurrency: {
    select: {
      code: true,
    },
  },
} satisfies Prisma.transactionSelect;

export type TransactionWithRelations = Prisma.transactionGetPayload<{
  select: typeof transactionSelect;
}>;

export function mapTransaction(transaction: TransactionWithRelations) {
  return {
    id: transaction.id,

    date: transaction.date,

    business: transaction.business,

    category: transaction.category_transaction_categoryTocategory?.name ?? null,

    account:
      transaction.account_transaction_accountToaccount?.description ?? null,

    mandatory: transaction.mandatory,

    amount: transaction.amount.toNumber(),

    location: transaction.location,

    type: transaction.transaction_type?.name ?? null,

    status: transaction.transaction_status?.name ?? null,

    payment_method: transaction.payment_method?.name ?? null,

    currency: transaction.currency_transaction_currencyTocurrency?.code ?? null,

    notes: transaction.notes,

    created: transaction.created,

    created_by: transaction.created_by,
  };
}
