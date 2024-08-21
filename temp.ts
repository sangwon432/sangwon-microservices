import { Body, Controller, Inject, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ClientProxy } from "@nestjs/microservices";

@Controller("user")
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject("USER_SERVICE") private readonly clientProxy: ClientProxy,
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.userService.createUser(createUserDto);

    this.clientProxy.emit("user_created", newUser);
    return newUser;
  }
}
