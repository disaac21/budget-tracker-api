import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { transactionSelect, mapTransaction } from './transaction.mapper';

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

  async findAll() {
    const transactions = await this.prisma.transaction.findMany({
      select: transactionSelect,
      orderBy: {
        date: 'desc',
      },
    });

    return transactions.map(mapTransaction);
  }

  async findByCategory(categoryId: number) {
    const transactions = await this.prisma.transaction.findMany({
      where: {
        category: categoryId,
      },
      select: transactionSelect,
      orderBy: {
        date: 'desc',
      },
    });

    return transactions.map(mapTransaction);
  }

  async findByTypeId(typeId: number) {
    const transactions = await this.prisma.transaction.findMany({
      where: {
        type_id: typeId,
      },
      select: transactionSelect,
      orderBy: {
        date: 'desc',
      },
    });

    return transactions.map(mapTransaction);
  }

  async findOne(id: number) {
    const transaction = await this.prisma.transaction.findUnique({
      where: {
        id,
      },
      select: transactionSelect,
    });

    if (!transaction) {
      return null;
    }

    return mapTransaction(transaction);
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
}
