import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Корпоративный SMTP (mail.alfa-can.com). Креды — только из env (в код не пишем).
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'mail.alfa-can.com',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true, // 465 = implicit TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const MAIL_FROM = process.env.SMTP_USER;
const MAIL_TO = process.env.MAIL_TO || process.env.SMTP_USER;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Валидация для обычной формы контакта
    const isContactForm = 'name' in formData && 'message' in formData;
    // Валидация для формы лидов чат-бота
    const isLeadForm = 'firstName' in formData && 'lastName' in formData;

    if (isContactForm) {
      if (!formData.name || !formData.email || !formData.message) {
        return NextResponse.json(
          { error: 'Missing required fields' },
          { status: 400 }
        );
      }
    } else if (isLeadForm) {
      if (!formData.firstName || !formData.email) {
        return NextResponse.json(
          { error: 'Missing required fields' },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { error: 'Invalid form data' },
        { status: 400 }
      );
    }

    // Отправка email
    const subject = isLeadForm
      ? `Новый лид из чат-бота: ${formData.firstName} ${formData.lastName}`
      : `Новая заявка: ${formData.name}`;

    const htmlContent = isLeadForm ? `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .header { background: #2563eb; color: white; padding: 20px; }
            .content { padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #2563eb; }
            .value { margin-top: 5px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🤖 Новый лид из чат-бота GuardianAI</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Имя:</div>
              <div class="value">${formData.firstName} ${formData.lastName}</div>
            </div>
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value">${formData.email}</div>
            </div>
            <div class="field">
              <div class="label">📞 Телефон:</div>
              <div class="value">${formData.phone || 'Не указано'}</div>
            </div>
            <div class="field">
              <div class="label">🌍 Местоположение:</div>
              <div class="value">${formData.city || ''}, ${formData.state || ''}, ${formData.country || ''}</div>
            </div>
            <div class="field">
              <div class="label">🏢 Компания:</div>
              <div class="value">${formData.companyName || 'Не указано'}</div>
            </div>
            <div class="field">
              <div class="label">💼 Должность:</div>
              <div class="value">${formData.position || 'Не указано'}</div>
            </div>
            <div class="field">
              <div class="label">🏭 Сфера бизнеса:</div>
              <div class="value">${formData.businessSphere || 'Не указано'}${formData.otherSphere ? ` - ${formData.otherSphere}` : ''}</div>
            </div>
            <div class="field">
              <div class="label">🌐 Сайт:</div>
              <div class="value">${formData.website || 'Не указано'}</div>
            </div>
          </div>
        </body>
      </html>
    ` : `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .header { background: #2563eb; color: white; padding: 20px; }
            .content { padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #2563eb; }
            .value { margin-top: 5px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🎯 Новая заявка с сайта</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Имя:</div>
              <div class="value">${formData.name}</div>
            </div>
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value">${formData.email}</div>
            </div>
            <div class="field">
              <div class="label">🏢 Компания:</div>
              <div class="value">${formData.company || 'Не указано'}</div>
            </div>
            <div class="field">
              <div class="label">📞 Телефон:</div>
              <div class="value">${formData.phone || 'Не указано'}</div>
            </div>
            <div class="field">
              <div class="label">📦 Продукт:</div>
              <div class="value">${formData.product}</div>
            </div>
            <div class="field">
              <div class="label">💬 Сообщение:</div>
              <div class="value" style="background: #f3f4f6; padding: 15px; border-radius: 8px;">${formData.message}</div>
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      subject,
      html: htmlContent,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
      );
  }
}