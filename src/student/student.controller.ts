import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from 'src/dto/student.dto';
import { Student } from 'src/interface/student.interface';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  async getString(): Promise<Student[]> {
    return await this.studentService.getString();
  }

  @Post()
  async createStudent(@Body() data: StudentDto): Promise<Student> {
    return await this.studentService.createStudent(data);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Student> {
    return await this.studentService.getById(id);
  }
  @Patch(':id')
  async updateStudent(
    @Param('id') id: string,
    @Body() data: StudentDto,
  ): Promise<Student> {
    return await this.studentService.updateOne(id, data);
  }

  @Delete(':id')
  async deleteByone(@Param('id') id: string): Promise<Student> {
    return await this.studentService.deleteOne(id);
  }
}
