import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateAccountDto) {
    return this.prisma.account.create({
      data: {
        name: dto.name,
        description: dto.description,
        currency: dto.currency,
        is_active: dto.is_active,
        created_by: '<USER_ID>',
      },
    });
  }

  findAll() {
    return this.prisma.account.findMany({
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.account.findUnique({
      where: { id },
    });
  }

  update(id: number, dto: UpdateAccountDto) {
    return this.prisma.account.update({
      where: { id },
      data: {
        ...dto,
        modified: new Date(),
        modified_by: '<USER_ID>',
      },
    });
  }

  remove(id: number) {
    return this.prisma.account.delete({
      where: { id },
    });
  }
}
