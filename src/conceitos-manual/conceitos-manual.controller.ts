import { Controller, Get } from '@nestjs/common';
import { ConceitosManualSerice } from './conceitos-manual.service';

@Controller('conceitos-manual')
export class ConceitosManualController {
  constructor(private readonly conceitosManualSerice: ConceitosManualSerice) {}

  @Get('comservice')
  teste(): string {
    return this.conceitosManualSerice.solucionaHome();
  }

  @Get('semservice')
  home(): string {
    return 'funcao home do controller conceitos-manual';
  }
}
