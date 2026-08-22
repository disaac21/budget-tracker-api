export class TransactionEntity {
  id!: number;
  date!: Date;
  business!: string;
  category!: string;
  description!: string;
  account!: number;
  mandatory!: boolean;
  amount!: number;
  location?: string | null;
  type!: number;
  status!: number;
  payment_method!: number;
  currency!: number;
  notes?: string | null;
}
