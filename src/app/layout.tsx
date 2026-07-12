import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import { getSiteSettings } from '@/server/functions/settings';
import './globals.css';

// ⚡ КРИТИЧНО: Переводим весь Layout в Edge, чтобы не было конфликтов с page.tsx
export const runtime = 'edge';

const sora = Sora({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-sora',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = settings.site_title ?? 'EU BUS - Прямі та комфортні рейси Київ — Варшава';
  const description = settings.site_description ?? 'Без піших переходів кордону. Wi-Fi, клімат-контроль та ортопедичні крісла. Ваша подорож бізнес-класу за ціною звичайного квитка.';
  const isIndexingEnabled = settings.seo_indexing_enabled === 'true';

  return {
    title,
    description,
    robots: {
      index: isIndexingEnabled,
      follow: isIndexingEnabled,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`dark ${sora.variable} ${inter.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-onyx-canvas text-ivory-text font-body antialiased min-h-screen overflow-x-hidden flex flex-col">
        {children}
      </body>
    </html>
  );
}