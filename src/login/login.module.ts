import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from './schemas/login.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Auth', schema: AuthSchema }])],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
