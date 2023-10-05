import { Document } from "mongoose";

export interface Student extends Document{
    name: string,
    age:number,
    class:string
}