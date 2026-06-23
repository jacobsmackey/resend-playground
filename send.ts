import { Resend } from 'resend';
import 'dotenv/config';

const resend = new Resend(process.env.RESEND_API_KEY);

const { data, error } = await resend.emails.send({
  from: process.env.FROM_EMAIL ?? 'onboarding@resend.dev',
  to: process.env.TO_EMAIL ?? 'delivered@resend.dev',
  subject: 'Hello from Resend!',
  html: '<p>It works! 🎉 You just sent an email with <strong>Resend</strong>.</p>',
});

if (error) {
  console.error('Error:', error);
  process.exit(1);
}

console.log('Sent! ID:', data?.id);
