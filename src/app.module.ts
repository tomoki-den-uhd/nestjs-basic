import { Module } from '@nestjs/common';
import { ItemsController } from './items/items.controller';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [ItemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
