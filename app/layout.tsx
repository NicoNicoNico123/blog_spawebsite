import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import BackgroundAudio from './components/BackgroundAudio';

export const metadata: Metadata = {
  title: '枕邊書聲｜Podcast',
  description: '用耳朵聽書，用心感受故事',
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
        <header className="site-header site-header--overlay">
          <div className="container header-inner">
            {/** Nav and brand removed for single-page application */}
            <button className="menu-toggle" aria-label="Toggle menu">
              <span className="logo" style={{ fontSize: 20 }}>☰</span>
            </button>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} 枕邊書聲 · 用聲音打開閱讀的另一種可能</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
