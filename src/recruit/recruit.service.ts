import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs';
import { CreateRecruitDto } from './dto/create-recruit.dto';

@Injectable()
export class RecruitService {
  constructor(private httpService: HttpService) {}

  async sendRecruitData(data: CreateRecruitDto) {
    const url =
      'https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json';

    return this.httpService.post(url, data).pipe(
      map((response) => response.data),
      catchError((error) => {
        throw new BadRequestException(
          'Failed to send data to recruitment service',
        );
      }),
    );
  }
}
