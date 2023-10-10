import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Register, Login } from './interface/login.interface';
import { LoginDto, RegisterDto, UserUpdateDto } from './dto/login.dto';
import HandleResponse from 'src/utils/handle_response';

@Injectable()
export class LoginService {
  constructor(@InjectModel('Auth') private registerModel: Model<Register>) {}

  async getId(): Promise<string> {
    return 'login by service';
  }

  async createUser(data: RegisterDto): Promise<Register> {
    const user = new this.registerModel(data);
    user.save();
    return HandleResponse.buildSuccessObj(200, 'User Created');
  }

  async findUser(userId: string, password: string): Promise<any> {
    const user = await this.registerModel.findOne({ email: userId }).exec();
    if (user?.password != password) {
      return HandleResponse.failureObj(401, 'UnAuthorized');
    }
    return HandleResponse.buildSuccessObj(200, 'Success', user);
  }

  async updateUser(data: UserUpdateDto): Promise<any> {
    const user = await this.registerModel
      .findOneAndUpdate({ email: data.email }, data, { new: true })
      .exec();

    if (user?.email !== data.email) {
      return HandleResponse.failureObj(401, 'UnAuthorized');
    }

    return HandleResponse.buildSuccessObj(200, 'Success', user);
  }
}
