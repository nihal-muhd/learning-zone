import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { UserService } from './user.service.js';

@Controller('user')
export class UserController {
  //Below line means: "Nest, this controller needs a UsersService. Please give me one."
  constructor(private readonly userService: UserService) {}

  // GET /user
  @Get()
  getUsers(@Query('name') name: string, @Query('role') role: string) {
    //we are not creating const usersService = new UsersService();
    //Instead, Nest creates the UsersService instance and gives it to the controller automatically.
    //That is Dependency Injection.
    return this.userService.findAll();
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    this.userService.findUserById(parseInt(id));
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
