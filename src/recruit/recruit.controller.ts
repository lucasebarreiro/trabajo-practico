import {
  BadRequestException,
  Body,
  Controller,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateRecruitDto } from './dto/create-recruit.dto';
import { RecruitService } from './recruit.service';

@Controller('recruit')
export class RecruitController {
  constructor(private readonly recruitService: RecruitService) {}

  @Post()
  async createRecruit(
    @Body(new ValidationPipe({ transform: true })) body: CreateRecruitDto,
  ) {
    body.name = this.capitalizeFirstLetter(body.name);
    body.suraname = this.capitalizeFirstLetter(body.suraname);

    const birthday = new Date(body.birthday);
    const today = new Date();
    if (birthday > today || birthday < new Date('1900/01/01')) {
      throw new BadRequestException('Invalid birthday date');
    }

    const response = await this.recruitService.sendRecruitData(body);
    return response;
  }

  private capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }
}
