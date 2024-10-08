import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoggedinUserDto } from './dto/loggedin-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.authService.createUser(createUserDto);
  }

  @Post('/login')
  async loggedInUser(@Body() loggedinUserDto: LoggedinUserDto) {
    return await this.authService.logInUser(loggedinUserDto);
  }
}
