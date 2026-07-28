// src/components/SchemaOrg.tsx
import Script from 'next/script';

interface SchemaOrgProps {
  type: 'Organization' | 'Product' | 'BreadcrumbList' | 'FAQPage';
  data: Record<string, any>;
}

export default function SchemaOrg({ type, data }: SchemaOrgProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
      strategy="afterInteractive"
    />
  );
}
