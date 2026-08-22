import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTransactionTypeDto } from './dto/create-transaction-type.dto';
import { UpdateTransactionTypeDto } from './dto/update-transaction-type.dto';

@Injectable()
export class TransactionTypesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateTransactionTypeDto) {
    return this.prisma.transaction_type.create({
      data: {
        name: dto.name,
        created_by: '<USER_ID>',
      },
    });
  }

  findAll() {
    return this.prisma.transaction_type.findMany({
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.transaction_type.findUnique({
      where: { id },
    });
  }

  update(id: number, dto: UpdateTransactionTypeDto) {
    return this.prisma.transaction_type.update({
      where: { id },
      data: {
        ...dto,
        modified: new Date(),
        modified_by: '<USER_ID>',
      },
    });
  }

  remove(id: number) {
    return this.prisma.transaction_type.delete({
      where: { id },
    });
  }
}
