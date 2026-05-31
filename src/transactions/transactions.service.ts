import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateTransactionDto) {
    return this.prisma.transaction.create({
      data: {
        date: new Date(dto.date),
        business: dto.business,
        category: dto.category,
        account: dto.account,
        mandatory: dto.mandatory,
        amount: dto.amount,
        type_id: dto.type_id,
        status_id: dto.status_id,
        currency: dto.currency,
        location: dto.location,
        payment_method_id: dto.payment_method_id,
        notes: dto.notes,
        created: new Date(),
        created_by: '<USER_ID>', // TODO: replace with actual user ID
      },
    });
  }

  findAll() {
    return this.prisma.transaction.findMany({
      orderBy: {
        date: 'desc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.transaction.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, dto: UpdateTransactionDto) {
    const data: any = { ...dto };

    if (dto.date) {
      data.date = new Date(dto.date);
    }

    return this.prisma.transaction.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.transaction.delete({
      where: {
        id,
      },
    });
  }

  // async getBalance() {
  //   const transactions = await this.prisma.transaction.findMany();

  //   const income = transactions
  //     .filter((t) => t.type === 'income')
  //     .reduce((sum, t) => sum + t.amount, 0);

  //   const expense = transactions
  //     .filter((t) => t.type === 'expense')
  //     .reduce((sum, t) => sum + t.amount, 0);

  //   return {
  //     income,
  //     expense,
  //     balance: income - expense,
  //   };
  // }
}
