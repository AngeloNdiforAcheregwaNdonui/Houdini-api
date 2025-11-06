import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjetsModule } from './projets/projets.module';
import { IssuesModule } from './issues/issues.module';

@Module({
  imports: [ProjetsModule, IssuesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
