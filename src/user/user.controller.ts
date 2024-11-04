import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() data: { name: string; email: string; password: string; start_time: string; end_time: string; status: number }) {
    return this.userService.createUser(data);
  }

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
}
