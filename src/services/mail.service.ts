import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

type MailPayload = {
  to: string;
  subject?: string;
  message: string;
};

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  public sendMail(payload: MailPayload) {
    try {
      const mail = this.mailerService.sendMail({
        from: 'system.no-reply@domain.com',
        to: payload.to,
        subject: payload.subject || 'Notification from CUL Bus Transport',
        text: payload.message,
      });

      console.log(mail);
    } catch (error) {
      console.log('mail-send-error', error);
    }
  }
}
