import { Module } from '@nestjs/common';
import {Buscador}

@Module({
  imports: [],
  controllers: [BuscadorController],
  providers: [BuscadorService],
})
export class AppModule {}
