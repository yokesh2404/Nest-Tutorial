import { Document } from "mongoose";

export interface Login extends Document{
  email: string,
  password: string
}

export interface Register extends Document{
    email:string,
    password:string,
    name:string,
    age:number
}