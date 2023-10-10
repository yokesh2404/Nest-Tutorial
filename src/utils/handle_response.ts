export default class HandleResponse {
  static buildSuccessObj(code: number, message: string, data?: any): any {
    const res: any = {
      code: code,
      status: true,
      message: message,
      data: data || null,
    };
    return res;
  }

  static failureObj(code: number, message: string, data?: any): any {
    const res: any = {
      code: code,
      status: false,
      message: message,
      data: data || null,
    };
    return res;
  }
}
