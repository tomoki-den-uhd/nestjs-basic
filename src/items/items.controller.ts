import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from 'generated/prisma';
import { CreateItemDto } from './DTO/create-item-dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  async findAll(): Promise<Item[]> {
    return await this.itemsService.findAll();
  }
  @Get(':id') // /items/id
  async findByID(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
    return await this.itemsService.findByID(id);
  }

  @Post()
  async create(@Body() CreateItemDto: CreateItemDto): Promise<Item> {
    return await this.itemsService.create(CreateItemDto);
  }

  @Put(':id')
  async updateStatus(@Param('id', ParseUUIDPipe) id: string) {
    return await this.itemsService.updateStatus(id);
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    await this.itemsService.delete(id);
  }
}
