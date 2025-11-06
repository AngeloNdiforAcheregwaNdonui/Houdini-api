import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjetsModule } from './projets/projets.module';
import { IssuesModule } from './issues/issues.module';
import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import path from 'node:path';

@Module({
  imports: [
      I18nModule.forRoot({
        fallbackLanguage: 'fr',
        loaderOptions: {
          path: path.join(__dirname, '/i18n/'),
          watch: true,
        },
        resolvers: [
          { use: QueryResolver, options: ['lang'] },
          AcceptLanguageResolver,
          new HeaderResolver(['x-lang']),
        ],
      }),
    ProjetsModule,
    IssuesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
