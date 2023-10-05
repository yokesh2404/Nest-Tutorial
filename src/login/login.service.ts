import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Register,Login } from './interface/login.interface';
import { LoginDto, RegisterDto } from './dto/login.dto';


@Injectable()
export class LoginService {
   constructor(@InjectModel("Auth") private registerModel:Model<Register>){}

   async getId():Promise<string>{
    return "login by service";
   }

   async createUser(data:RegisterDto):Promise<Register>{
    const user=new this.registerModel(data);
    return user.save();
   }

   async findUser(userId:string,password:string):Promise<any>{
    const user=await this.registerModel.findOne({email:userId}).exec();
    if(user?.password!=password){
        throw new UnauthorizedException();
    }
    return user;
   }

}
