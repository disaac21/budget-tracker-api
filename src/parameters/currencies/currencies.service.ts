import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';

@Injectable()
export class CurrenciesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateCurrencyDto) {
    return this.prisma.currency.create({
      data: {
        name: dto.name,
        code: dto.code,
        created_by: '<USER_ID>',
      },
    });
  }

  findAll() {
    return this.prisma.currency.findMany({
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.currency.findUnique({
      where: { id },
    });
  }

  update(id: number, dto: UpdateCurrencyDto) {
    return this.prisma.currency.update({
      where: { id },
      data: {
        ...dto,
        modified: new Date(),
        modified_by: '<USER_ID>',
      },
    });
  }

  remove(id: number) {
    return this.prisma.currency.delete({
      where: { id },
    });
  }
}
