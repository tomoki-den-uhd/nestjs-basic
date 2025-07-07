import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './items.model';
import { CreateItemDto } from './DTO/create-item-dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }
  @Get(':id') // /items/id
  findByID(@Param('id') id: string): Item {
    return this.itemsService.findByID(id);
  }

  @Post()
  create(@Body() CreateItemDto: CreateItemDto): Item {
    return this.itemsService.create(CreateItemDto);
  }
  @Put(':id')
  updateStatus(@Param('id') id: string) {
    return this.itemsService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.itemsService.delete(id);
  }
}
