import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TransactionStatusesService } from './transaction-statuses.service';
import { CreateTransactionStatusDto } from './dto/create-transaction-status.dto';
import { UpdateTransactionStatusDto } from './dto/update-transaction-status.dto';

@Controller('transaction-statuses')
export class TransactionStatusesController {
  constructor(
    private readonly transactionStatusesService: TransactionStatusesService,
  ) {}

  @Post()
  create(@Body() createTransactionStatusDto: CreateTransactionStatusDto) {
    return this.transactionStatusesService.create(createTransactionStatusDto);
  }

  @Get()
  findAll() {
    return this.transactionStatusesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.transactionStatusesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTransactionStatusDto: UpdateTransactionStatusDto,
  ) {
    return this.transactionStatusesService.update(
      id,
      updateTransactionStatusDto,
    );
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.transactionStatusesService.remove(id);
  }
}
