import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosManualSerice {
  solucionaHome(): string {
    return 'isso é um teste para um service feito manualmente';
  }
}
