import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import BackgroundAudio from './components/BackgroundAudio';

export const metadata: Metadata = {
  title: '講到你瞓着｜讓沉悶聲音令你恰眼訓',
  description: '入夜之後，攤喺床上、抱住個枕頭，耳邊傳嚟一個又一個沉悶聲音——呢度係「講到你瞓着」，一個專為忙碌都市人打造嘅恰眼訓空間。',
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
