// src/components/LinkedInFeed.tsx
'use client';
import { useEffect, useState } from 'react';

interface FeedItem {
  title: string;
  link: string;
  pubDate: string;
}

interface LinkedInFeedProps {
  url: string;
  maxItems?: number; // Определяем maxItems как опциональный проп
}

export default function LinkedInFeed({ url, maxItems = 5 }: LinkedInFeedProps) {
  const [feed, setFeed] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch(`/api/linkedin-proxy?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        setFeed(data.items?.slice(0, maxItems) || []);
      } catch (error) {
        console.error("Ошибка загрузки RSS-фида:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, [url, maxItems]);

  if (loading) {
    return <div className="text-center text-white/60">Загрузка новостей...</div>;
  }

  if (feed.length === 0) {
    return <div className="text-center text-white/60">Новостей пока нет.</div>;
  }

  return (
    <div className="grid gap-6">
      {feed.map((item, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-cyan-900/30 to-gray-900/30 border border-cyan-500/50 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold mb-2">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300"
            >
              {item.title}
            </a>
          </h3>
          <p className="text-white/60 text-sm">
            {new Date(item.pubDate).toLocaleDateString('ru-RU')}
          </p>
        </div>
      ))}
    </div>
  );
}
