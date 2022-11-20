import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()// nshum enq vor interceptori mej imana vor dashtery cuych ta
  id: number;

  @Expose()
  email: string;

  @Expose()
  token: string;

}
