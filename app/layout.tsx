import './globals.css';
import type { Metadata } from 'next';
import BackgroundAudio from './components/BackgroundAudio';

export const metadata: Metadata = {
  title: '枕邊書聲｜Podcast',
  description: '用耳朵聽書，用心感受故事',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-HK">
      <body>
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
