import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Controller('user')
export class UserController {
  // GET /user
  @Get()
  getUsers(@Query('name') name: string, @Query('role') role: string) {
    return { name, role };
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return { id };
  }
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return { message: 'User created successfully' };
  }
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {};
  }
  //@Get('all')      //GET /user/all
  //@Get(':id')      //GET /user/:id
  //@Post()          //Post /user
  //@Delete(':id)    //Delete /user/:id
  //@Put(':id)       //Put /user/:id
}
