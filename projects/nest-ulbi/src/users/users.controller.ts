import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { Roles } from '../decorators/roles-auth.decorator';
import { RolesGuard } from '../guards/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { ValidationPipe } from '../pipes/validation.pipe';

//Swagger users doc name
@ApiTags('Users')
//-----------------------
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  //Swagger doc
  @ApiOperation({ summary: 'Creat user' })
  @ApiResponse({ status: 200, type: User })
  //Validation Pipe
  @UsePipes(ValidationPipe)
  //-----------------------
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  //Swagger doc
  @ApiOperation({ summary: 'Get user' })
  @ApiResponse({ status: 200, type: [User] })
  //-----------------------
  @UseGuards(JwtAuthGuard)
  @Get()
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  getAll() {
    return this.userService.getAllUsers();
  }

  //Swagger doc
  @ApiOperation({ summary: 'Get role' })
  @ApiResponse({ status: 200 })
  //-----------------------
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/role')
  getRole(@Body() dto: AddRoleDto) {
    return this.userService.addRole(dto);
  }

  //Swagger doc
  @ApiOperation({ summary: 'Ban user' })
  @ApiResponse({ status: 200 })
  //-----------------------
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/ban')
  banUser(@Body() dto: BanUserDto) {
    return this.userService.banUser(dto);
  }
}
