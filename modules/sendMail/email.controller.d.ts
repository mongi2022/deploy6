import { MailerService } from "@nestjs-modules/mailer";
export declare class EmailController {
    private emailService;
    constructor(emailService: MailerService);
    plainTextEmail(toemail: any): Promise<string>;
}
