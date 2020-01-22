import { Response } from 'express';

class Responder {
  public statusCode: number = null;

  public type: string = null;

  public data: any = null;

  public message: string = null;

  public async setSuccess(statusCode: number, message: string, data?: any) {
    this.statusCode = statusCode;
    this.type = 'success';
    this.message = message;
    this.data = data;
  }

  public async setError(statusCode: number, message: string) {
    this.statusCode = statusCode;
    this.type = 'error';
    this.message = message;
  }

  public async send(res: Response) {
    const result = {
      status: this.type,
      message: this.message,
      data: this.data,
    };

    if (this.type === 'success') {
      return res.status(this.statusCode).json(result);
    }
    return res.status(this.statusCode).json({
      status: this.type,
      message: this.message,
    });
  }
}

export default Responder;