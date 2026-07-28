// src/app/api/test-new-key/route.ts
import { NextResponse } from 'next/server';

interface WebsiteInfo {
  id?: string;
  name?: string;
  domain?: string;
  [key: string]: any;
}

interface StatsData {
  visits?: number;
  pageviews?: number;
  visitors?: number;
  [key: string]: any;
}

export async function GET() {
  const apiKey = process.env.UMAMI_API_KEY || '';
  const siteId = 'c428d82e-e516-4a0d-8450-9fea03d9e1';
  
  if (!apiKey) {
    return NextResponse.json({
      success: false,
      error: 'UMAMI_API_KEY не найден в .env.local',
      instruction: 'Добавьте UMAMI_API_KEY=ваш_ключ в .env.local'
    });
  }
  
  console.log('🔐 Testing new API key...');
  console.log('Key length:', apiKey.length);
  console.log('Key preview:', apiKey.substring(0, 10) + '...');
  
  try {
    // Тест 1: Базовая информация о сайте
    const response1 = await fetch(`https://cloud.umami.is/api/websites/${siteId}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });
    
    console.log('Test 1 - Website info:', response1.status);
    
    let websiteInfo: WebsiteInfo = {};
    if (response1.ok) {
      websiteInfo = await response1.json() as WebsiteInfo;
      console.log('✅ Website name:', websiteInfo.name);
    }
    
    // Тест 2: Статистика
    const response2 = await fetch(`https://cloud.umami.is/api/websites/${siteId}/stats`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });
    
    console.log('Test 2 - Stats:', response2.status);
    
    let stats: StatsData = {};
    if (response2.ok) {
      stats = await response2.json() as StatsData;
      console.log('✅ Stats received');
    }
    
    const responseData = {
      success: response1.ok || response2.ok,
      tests: {
        websiteInfo: {
          status: response1.status,
          ok: response1.ok,
          data: response1.ok ? websiteInfo : null
        },
        stats: {
          status: response2.status,
          ok: response2.ok,
          data: response2.ok ? stats : null
        }
      },
      keyInfo: {
        length: apiKey.length,
        preview: apiKey.substring(0, 10) + '...',
        isValidFormat: apiKey.startsWith('api_')
      },
      nextSteps: response1.ok ? '✅ Ключ работает! Обновите основной API route.' : '❌ Ключ не работает. Получите новый.'
    };
    
    return NextResponse.json(responseData);
    
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
      stack: error.stack
    });
  }
}