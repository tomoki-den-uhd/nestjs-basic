import { Injectable } from '@nestjs/common';
import { Item } from './items.model';
import { CreateItemDto } from './DTO/create-item-dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  findByID(id: string): Item {
    const items = this.items.find((item) => item.id === id);
    if (!items) {
      throw new Error('商品が存在しません');
    }
    return items;
  }

  create(CreateItemDto: CreateItemDto): Item {
    const item: Item = {
      id: uuid(),
      ...CreateItemDto,
      status: 'ON_SALE',
    };
    this.items.push(item);
    return item;
  }

  updateStatus(id: string): Item {
    const item = this.findByID(id);
    item.status = 'SOLD_OUT';
    return item;
  }

  delete(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
  }
}

