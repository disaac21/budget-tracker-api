import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BalanceService {
  constructor(private prisma: PrismaService) {}

  async getBalance() {
    const transactions = await this.prisma.transaction.findMany();

    const income = transactions
      .filter((t) => t.type_id === 1)
      .reduce((sum, t) => sum + t.amount.toNumber(), 0);

    const expense = transactions
      .filter((t) => t.type_id === 2)
      .reduce((sum, t) => sum + t.amount.toNumber(), 0);

    const balance = income - expense;

    return {
      income,
      expense,
      balance,
    };
  }

  async getFinancialMonthBalance() {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 20);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 20);

    const transactions = await this.prisma.transaction.findMany({
      where: {
        date: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
      orderBy: {
        date: 'desc',
      },
    });

    console.log('Transactions for financial month:', transactions);

    const income = transactions
      .filter((t) => t.type_id === 1)
      .reduce((sum, t) => sum + t.amount.toNumber(), 0);

    let expense = transactions
      .filter((t) => t.type_id === 2)
      .reduce((sum, t) => sum + t.amount.toNumber(), 0);

    const monthlySaving = transactions
      .filter((t) => t.type_id === 3 && t.business.includes('TEF A:'))
      .reduce((sum, t) => sum + t.amount.toNumber(), 0);

    expense += monthlySaving;

    const balance = income - expense;

    return {
      income,
      expense,
      balance,
    };
  }
}
