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
  findAll(): Item[] {
    return this.itemsService.findAll();
  }
  @Get(':id') // /items/id
  findByID(@Param('id', ParseUUIDPipe) id: string): Item {
    return this.itemsService.findByID(id);
  }

  @Post()
  async create(@Body() CreateItemDto: CreateItemDto): Promise<Item> {
    return await this.itemsService.create(CreateItemDto);
  }
  @Put(':id')
  updateStatus(@Param('id', ParseUUIDPipe) id: string) {
    return this.itemsService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.itemsService.delete(id);
  }
}
