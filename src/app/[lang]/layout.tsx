import { headers } from 'next/headers';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getSiteSettings } from '@/server/functions/settings';
import { StructuredData } from '@/components/StructuredData';
import { getDictionary } from '@/i18n/dictionaries';

export const runtime = 'edge';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const h = headers();
  let pathname = h.get('x-pathname') || '/';
  
  if (pathname.startsWith('/ru')) {
    pathname = pathname.replace('/ru', '') || '/';
  }
  
  const basePath = pathname === '/' ? '' : pathname;
  
  const settings = await getSiteSettings();
  const isUk = params.lang === 'uk';
  const defaultTitle = 'Шаблон | Template';
  const defaultDesc = 'Описание шаблона';
  
  const title = settings.site_title || defaultTitle;
  const description = settings.site_description || defaultDesc;
  
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: 'website',
        url: `${baseUrl}${isUk ? '' : '/ru'}${basePath}`,
        images: ['/hero-bg.png'],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: ['/hero-bg.png'],
      },
      alternates: {
        canonical: `${baseUrl}${isUk ? '' : '/ru'}${basePath}`,
        languages: {
          ru: `${baseUrl}/ru${basePath}`,
          uk: `${baseUrl}${basePath}`,
        },
      },
    };
}


export default async function LangLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const settings = await getSiteSettings();
  const dict = getDictionary(params.lang);

  return (
    <>
      <Header dict={dict.nav} />
      <main className="flex-grow flex flex-col">{children}</main>
      <Footer dict={dict.footer} navDict={dict.nav} />
      <StructuredData lang={params.lang || 'uk'} />
    </>
  );
}
