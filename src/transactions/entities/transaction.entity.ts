import { TransactionType } from '@prisma/client';

export class TransactionEntity {
  id: number;
  date: Date;
  description: string;
  category: string;
  account: string;
  mandatory: boolean;
  amount: number;
  type: TransactionType;
}
