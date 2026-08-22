import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: {
        name: dto.name,
        emoji: dto.emoji,
        type: dto.type,
        is_active: dto.is_active,
        created_by: '<USER_ID>',
      },
    });
  }

  findAll() {
    return this.prisma.category.findMany({
      orderBy: { id: 'asc' },
    });
  }

  findByType(typeId: number) {
    return this.prisma.category.findMany({
      where: { type: typeId },
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.category.findUnique({
      where: { id },
    });
  }

  update(id: number, dto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: { id },
      data: {
        ...dto,
        modified: new Date(),
        modified_by: '<USER_ID>',
      },
    });
  }

  remove(id: number) {
    return this.prisma.category.delete({
      where: { id },
    });
  }
}
