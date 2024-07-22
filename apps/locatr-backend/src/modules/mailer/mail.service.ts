import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendUserConfirmation(email: string, token: string) {
    // const url = `example.com/auth/confirm?token=${token}`;
    const url = `${process.env.APP_URL}/auth/confirm?token=${token}`;

    await this.mailerService.sendMail({
      to: email,
      subject: 'Welcome to Our Service! Confirm your Email',
      template: './verify-email',
      context: {
        url,
      },
    });
  }

  async sendPasswordReset(email: string, token: string) {
    // const url = `example.com/auth/reset-password?token=${token}`;
    const url = `${process.env.APP_URL}/auth/reset-password?token=${token}`;

    await this.mailerService.sendMail({
      to: email,
      subject: 'Reset Your Password',
      template: './forgot-password',
      context: {
        url,
      },
    });
  }
}
