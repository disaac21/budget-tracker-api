import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTransactionStatusDto } from './dto/create-transaction-status.dto';
import { UpdateTransactionStatusDto } from './dto/update-transaction-status.dto';

@Injectable()
export class TransactionStatusesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateTransactionStatusDto) {
    return this.prisma.transaction_status.create({
      data: {
        name: dto.name,
        created_by: '<USER_ID>',
      },
    });
  }

  findAll() {
    return this.prisma.transaction_status.findMany({
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.transaction_status.findUnique({
      where: { id },
    });
  }

  update(id: number, dto: UpdateTransactionStatusDto) {
    return this.prisma.transaction_status.update({
      where: { id },
      data: {
        ...dto,
        modified: new Date(),
        modified_by: '<USER_ID>',
      },
    });
  }

  remove(id: number) {
    return this.prisma.transaction_status.delete({
      where: { id },
    });
  }
}
