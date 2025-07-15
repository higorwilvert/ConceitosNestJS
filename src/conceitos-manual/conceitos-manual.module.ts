import { Module } from '@nestjs/common';
import { ConceitosManualController } from './conceitos-manual.controller';
import { ConceitosManualSerice } from './conceitos-manual.service';

@Module({
  controllers: [ConceitosManualController],
  providers: [ConceitosManualSerice],
})
export class ConceitosManualModule {}
