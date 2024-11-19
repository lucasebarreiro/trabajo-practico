import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RecruitController } from './recruit.controller';
import { RecruitService } from './recruit.service';

@Module({
  imports: [HttpModule],
  controllers: [RecruitController],
  providers: [RecruitService],
})
export class RecruitModule {}
