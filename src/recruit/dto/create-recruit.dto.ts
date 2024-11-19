import { IsDateString, IsIn, IsInt, IsString, Max, Min } from 'class-validator';

export class CreateRecruitDto {
  @IsString()
  name: string;

  @IsString()
  suraname: string;

  @IsDateString()
  birthday: string;

  @IsInt()
  @Min(0)
  @Max(150)
  age: number;

  @IsIn(['CUIT', 'DNI'])
  documentType: string;

  @IsInt()
  documentNumber: number;
}
