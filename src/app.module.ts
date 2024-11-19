import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecruitModule } from './recruit/recruit.module';

@Module({
  imports: [RecruitModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
