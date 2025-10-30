import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjetsModule } from './projets/projets.module';

@Module({
  imports: [ProjetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
