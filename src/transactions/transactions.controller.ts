import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  findAll() {
    return this.transactionsService.findAll();
  }

  @Get('category/:categoryId')
  findByCategory(@Param('categoryId') categoryId: number) {
    return this.transactionsService.findByCategory(categoryId);
  }

  @Get('type/:typeId')
  findByTypeId(@Param('typeId') typeId: number) {
    return this.transactionsService.findByTypeId(typeId);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.transactionsService.findOne(id);
  }

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    return this.transactionsService.update(id, updateTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.transactionsService.remove(id);
  }
}
