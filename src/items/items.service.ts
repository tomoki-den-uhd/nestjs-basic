import { Injectable, NotFoundException } from '@nestjs/common';
import { Item, ItemStatus } from 'generated/prisma';
import { CreateItemDto } from './DTO/create-item-dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<Item[]> {
    return await this.prismaService.item.findMany(); //findMany()は複数のレコードを取得し、引数には条件を設定できる
  }

  async findByID(id: string): Promise<Item> {
    const found = await this.prismaService.item.findUnique({
      where: {
        id,
      },
    });
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async create(CreateItemDto: CreateItemDto): Promise<Item> {
    const { name, price, description } = CreateItemDto;
    return await this.prismaService.item.create({
      data: {
        name,
        price,
        description,
        status: ItemStatus.ON_SALE,
      },
    });
  }

  async updateStatus(id: string): Promise<Item> {
    return await this.prismaService.item.update({
      data: {
        status: 'SOLD_OUT',
      },
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    await this.prismaService.item.delete({
      where: { id },
    });
  }
}
