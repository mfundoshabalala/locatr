import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: Transporter;

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      port: this.configService.get<number>('MAIL_PORT'),
      secure: this.configService.get<boolean>('MAIL_SECURE', false),
      auth: {
        user: this.configService.get<string>('MAIL_USER'),
        pass: this.configService.get<string>('MAIL_PASSWORD'),
      },
    });
  }

  async sendPasswordResetEmail(to: string, username: string, token: string): Promise<void> {
    const resetUrl = `${this.configService.get<string>('FRONTEND_URL')}/auth/reset-password?token=${token}&username=${username}`;

    await this.transporter.sendMail({
      from: this.configService.get<string>('MAIL_FROM'),
      to,
      subject: 'Password Reset Request',
      html: `
        <h2>Password Reset Request</h2>
        <p>Hello ${username},</p>
        <p>You have requested to reset your password. Click the link below to reset your password:</p>
        <a href="${resetUrl}">Reset Password</a>
        <p>This link will expire in 1 hour.</p>
        <p>If you did not request this, please ignore this email.</p>
      `,
    });
  }

  async sendVerificationEmail(to: string, username: string, token: string): Promise<void> {
    const verifyUrl = `${this.configService.get<string>('FRONTEND_URL')}/auth/verify-user?token=${token}&username=${username}`;

    await this.transporter.sendMail({
      from: this.configService.get<string>('MAIL_FROM'),
      to,
      subject: 'Email Verification',
      html: `
        <h2>Email Verification</h2>
        <p>Hello ${username},</p>
        <p>Thank you for registering. Please verify your email by clicking the link below:</p>
        <a href="${verifyUrl}">Verify Email</a>
        <p>This link will expire in 24 hours.</p>
      `,
    });
  }
}
