import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Session,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import {
  Serialize,
  SerializeInterceptor,
} from '../interceptors/serialize.interceptor';
import { ValidationPipe } from '../pipes/validation.pipe';
import { UserDto } from './dtos/user.dto';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { AuthUser } from 'src/decorators/auth-user.decorator';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { CurrentUser } from '../decorators/current-user.decorator';
import { AuthGuard } from '../guards/auth.guard';

@Controller('auth')
// vor bolor dashterin chtanq global sench saxin enq tali
// @Serialize(UserDto)
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}

  ////Pipe validation
  // @UsePipes(ValidationPipe) ete global main.ts um chenq ogtagortum validation pipe karanq sench sarqenq mer uzat dzevov
  ////interceptor
  // @UseInterceptors(ClassSerializerInterceptor) // vor en dashtery voronq entityi mej Exclude en cherevan
  // @UseInterceptors(new SerializeInterceptor(UserDto)) // SerializeInterceptor vorpesi entityi mej chnshenq custom sarqum enq vorna mez petq
  // @Serialize(UserDto) // nuyn vervinnna anum uxaki karch optimal cod

  @Post('/signup')
  async createUser(@Body() userDto: CreateUserDto, @Session() session: any) {
    const { user, token } = await this.authService.signUp(userDto);
    session.userId = user.id;
    return token;
  }

  @Post('/signin')
  async signin(@Body() userDto: CreateUserDto, @Session() session: any) {
    const { user, token } = await this.authService.signIn(userDto);
    session.userId = user.id;
    return token;
  }

  @Post('/signout')
  signOut(@Session() session: any) {
    session.userId = null;
    return { message: 'log out' };
  }

  // //gtnel userin sesiayi mijochov
  // @Get('/whoami')
  // whoAmI(@Session() session: any) {
  //   return this.userService.findOne(session.userId);
  // }

  //gtnel userin aranch token
  @Get('/whoami')
  @UseGuards(AuthGuard)// gtnel login exat userin
  whoAmI(@CurrentUser() user: User) {
    return user;
  }

  // //gtnel userin tokeni mijochov
  // @Get('/whoami')
  // @UseGuards(JwtAuthGuard)//stuguma token valida te che , gtnum userin u dnum rec -i mej
  // whoAmI(@AuthUser() user: User) {
  //   return user;
  // }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userService.update(parseInt(id), body);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }

  @Get()
  findUsers() {
    return this.userService.findAll();
  }

  @Get('/:id')
  findUser(@Param('id') id: string) {
    // console.log(user, 'user');
    return this.userService.findOne(parseInt(id));
  }
}

// @Get('/colors/:color')
// setColor(@Param('color') color: string, @Session() session: any) {
//   session.color = color;
// }
//
// @Get('/colors')
// getColor(@Session() session: any) {
//   return session.color;
// }
