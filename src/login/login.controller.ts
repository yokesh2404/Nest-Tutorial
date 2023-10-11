import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { Register } from './interface/login.interface';
import { LoginDto, RegisterDto, UserUpdateDto } from './dto/login.dto';

@Controller('auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get('user-details/:id')
  async getUserById(@Param('id') id: string): Promise<any> {
    return await this.loginService.getUserById(id);
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

  @Get('all-users')
  async getAllUser(): Promise<any> {
    return await this.loginService.getAllUser();
  }

  @Delete('delete-user/:id')
  async deleteUser(@Param('id') id: string): Promise<any> {
    return await this.loginService.deleteUser(id);
  }

  @Delete('deleteAllUser')
  async deleteAllUser(): Promise<any> {
    return await this.loginService.deleteAllUser();
  }
}
