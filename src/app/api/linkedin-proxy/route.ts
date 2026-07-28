// src/app/api/linkedin-proxy/route.ts
import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL не указан' }, { status: 400 });
  }

  try {
    const feed = await parser.parseURL(url);
    const items = feed.items.map(item => ({
      title: item.title || 'Без названия',
      link: item.link || '#',
      pubDate: item.pubDate || new Date().toISOString(),
    }));

    return NextResponse.json({ items });
  } catch (error) {
    console.error('Ошибка парсинга RSS:', error);
    return NextResponse.json({ error: 'Ошибка загрузки фида' }, { status: 500 });
  }
}
