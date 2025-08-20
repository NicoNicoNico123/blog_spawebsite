import './globals.css';
import type { Metadata } from 'next';
import { siteConfig } from './siteConfig';
import Script from 'next/script';
import BackgroundAudio from './components/BackgroundAudio';

export const metadata: Metadata = {
  metadataBase: new URL('https://podcast.nicolaschan.me'),
  title: '講到你瞓着｜讓沉悶聲音令你恰眼訓',
  description:
    '入夜之後，攤喺床上、抱住個枕頭，耳邊傳嚟一個又一個沉悶聲音——呢度係「講到你瞓着」，一個專為忙碌都市人打造嘅恰眼訓空間。',
  openGraph: {
    title: '講到你瞓着｜讓沉悶聲音令你恰眼訓',
    description:
      '入夜之後，攤喺床上、抱住個枕頭，耳邊傳嚟一個又一個沉悶聲音——呢度係「講到你瞓着」，一個專為忙碌都市人打造嘅恰眼訓空間。',
    url: 'https://podcast.nicolaschan.me/',
    siteName: siteConfig.name,
    locale: 'zh_HK',
    type: 'website',
    images: [{
      url: '/og.jpg',
      width: 1200,
      height: 630,
      alt: siteConfig.tagline,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '講到你瞓着｜讓沉悶聲音令你恰眼訓',
    description:
      '入夜之後，攤喺床上、抱住個枕頭，耳邊傳嚟一個又一個沉悶聲音——呢度係「講到你瞓着」，一個專為忙碌都市人打造嘅恰眼訓空間。',
    images: ['/og.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-HK">
      <body>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ERSTLP57LP"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ERSTLP57LP');
          `}
        </Script>
        <BackgroundAudio />
        <header className="site-header site-header--overlay" />
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} 講到你瞓着 · 讓沉悶聲音令你恰眼訓</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
