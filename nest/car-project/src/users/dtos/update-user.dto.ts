import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()//sarquma voch partadir dasht vor ete chlini validachiayi error chlini
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(10)
  @IsOptional()
  password: string;
}
