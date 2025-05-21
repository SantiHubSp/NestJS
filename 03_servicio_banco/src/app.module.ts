import { Module } from '@nestjs/common';
import { BancoController } from './controller/banco.controller';
import { CuentaService } from './service/cuenta.service';

@Module({
  imports: [],
  controllers: [BancoController],
  providers: [CuentaService],
})
export class AppModule {}
