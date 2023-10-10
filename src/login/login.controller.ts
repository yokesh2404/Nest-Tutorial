import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { Register } from './interface/login.interface';
import { LoginDto, RegisterDto, UserUpdateDto } from './dto/login.dto';

@Controller('auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  async getId(): Promise<String> {
    return await this.loginService.getId();
  }

  @Post('register')
  async createUser(@Body() data: RegisterDto): Promise<Register> {
    return await this.loginService.createUser(data);
  }

  @Post('login')
  async loginUser(@Body() data: LoginDto): Promise<any> {
    return await this.loginService.findUser(data.email, data.password);
  }

  @Patch('update')
  async updateUser(@Body() data: UserUpdateDto): Promise<any> {
    return await this.loginService.updateUser(data);
  }
}
