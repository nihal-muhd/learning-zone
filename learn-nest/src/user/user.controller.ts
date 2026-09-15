import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  // GET /user
  @Get()
  getUsers() {
    return [
      { id: 1, name: 'John doe' },
      { id: 1, name: 'John doe' },
    ];
  }
  //@Get('all')      //GET /user/all
  //@Get(':id')      //GET /user/:id
  //@Post()          //Post /user
  //@Delete(':id)    //Delete /user/:id
  //@Put(':id)       //Put /user/:id
}
