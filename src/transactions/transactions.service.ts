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
        description: dto.description,
        category: dto.category,
        account: dto.account,
        mandatory: dto.mandatory,
        amount: dto.amount,
        type: dto.type,
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
}
