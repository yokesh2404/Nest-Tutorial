import { Body, Get, Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentDto } from 'src/dto/student.dto';
import { Student } from 'src/interface/student.interface';

@Injectable()
export class StudentService {
  constructor(@InjectModel('Student') private studentModel: Model<Student>) {}

  async getString(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async createStudent(data: StudentDto): Promise<Student> {
    const student = new this.studentModel(data);
    return student.save();
  }

  async getById(id: string): Promise<Student> {
    return this.studentModel.findById(id).exec();
  }

  async updateOne(id: string, data: StudentDto): Promise<Student> {
    return this.studentModel
      .findOneAndUpdate({ _id: id }, data, { new: true })
      .exec();
  }

  async deleteOne(id: string): Promise<Student> {
    return this.studentModel.findOneAndDelete({ _id: id }).exec();
  }
}
