export interface LoginDto{
  email: string,
  password: string
}

export interface RegisterDto{
  email: string,
  password: string,
  name:string,
  age:number
}

export interface UserUpdateDto{
  email: string,
  name:string,
  age:number
}
