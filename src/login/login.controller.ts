import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { Register } from './interface/login.interface';
import { LoginDto, RegisterDto } from './dto/login.dto';

@Controller('auth')
export class LoginController {
 constructor(private readonly loginService:LoginService){}

 @Get()
 async getId():Promise<String>{
    return await this.loginService.getId();
 }

 @Post("register")
 async createUser(@Body() data:RegisterDto):Promise<Register>{
   return await this.loginService.createUser(data);
 }

 @Post("login")
 async loginUser(@Body() data:LoginDto):Promise<Register>{
    return await this.loginService.findUser(data.email,data.password)
 }

}
