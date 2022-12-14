import {IsEmail, IsString, MaxLength, MinLength,} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(10)
  password: string;
}
