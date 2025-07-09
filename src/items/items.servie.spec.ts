import { Test } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { PrismaService } from 'src/prisma/prisma.service';

const mockPrismaService = {
  item: {
    findMany: jest.fn(),
  },
};

describe('ItemsServiceTest', () => {
  let itemsService: ItemsService;
  let prismaService: PrismaService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ItemsService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    itemsService = module.get<ItemsService>(ItemsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });
});
