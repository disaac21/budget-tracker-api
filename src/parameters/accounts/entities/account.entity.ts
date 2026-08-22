export class AccountEntity {
  id!: number;
  name!: string;
  description!: string;
  is_active?: boolean | null;
  created?: Date | null;
  created_by?: string | null;
  modified?: Date | null;
  modified_by?: string | null;
  currency?: number | null;
}
