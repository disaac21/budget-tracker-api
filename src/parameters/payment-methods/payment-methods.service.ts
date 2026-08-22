import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';

@Injectable()
export class PaymentMethodsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreatePaymentMethodDto) {
    return this.prisma.payment_method.create({
      data: {
        name: dto.name,
        created_by: '<USER_ID>',
      },
    });
  }

  findAll() {
    return this.prisma.payment_method.findMany({
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.payment_method.findUnique({
      where: { id },
    });
  }

  update(id: number, dto: UpdatePaymentMethodDto) {
    return this.prisma.payment_method.update({
      where: { id },
      data: {
        ...dto,
        modified: new Date(),
        modified_by: '<USER_ID>',
      },
    });
  }

  remove(id: number) {
    return this.prisma.payment_method.delete({
      where: { id },
    });
  }
}
