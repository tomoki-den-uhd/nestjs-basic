import { Injectable } from '@nestjs/common';
import { Item } from './items.model';

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

  create(item: Item): Item {
    this.items.push(item);
    return item;
  }

  updateStatus(id: string): Item {
    const item = this.findByID(id);
    item.status = 'SOLD_OUT';
    return item;
  }
}

