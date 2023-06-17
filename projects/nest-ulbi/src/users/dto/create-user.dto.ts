import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  //Swagger doc
  @ApiProperty({ example: 'user@gmail.com', description: 'user email' })
  //validation
  @IsString({ message: 'Email must be string' })
  @IsEmail({}, { message: 'Incorrect email' })
  //-----------------------
  readonly email: string;
  //Swagger doc
  @ApiProperty({ example: '123456', description: 'user password' })
  //validation
  @IsString({ message: 'Password must be string' })
  @Length(4, 16, { message: 'min length 4 max length 16' })
  //-----------------------
  readonly password: string;
}
