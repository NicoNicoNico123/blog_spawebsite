// import HeroScene from './components/HeroScene';
import { siteConfig } from './siteConfig';
import Image from 'next/image';
import LogosCarousel from './components/LogosCarousel';
import SceneCard from './components/SceneCard';

export default function HomePage() {
  const title = `${siteConfig.name}`;
  const subtitle = '讓沉悶聲音令你恰眼訓';
  // No markdown or long-form copy; hero + scenes + platforms only

  return (
    <>
      <section className="hero">
        {/* Background videos (mobile + desktop), full-bleed */}
        <video className="hero-video mobile-only" autoPlay muted loop playsInline poster="/hero/hero-mobile.jpg">
          <source src="/video/output_hero.mp4" type="video/mp4" />
        </video>
        <video className="hero-video desktop-only" autoPlay muted loop playsInline poster="/hero/hero-desktop.jpg">
          <source src="/video/output_hero.mp4" type="video/mp4" />
        </video>

        {/* Content */}
        <div className="container hero-inner hero-content">
          <h1 className="hero-title gradient-text">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="cta-buttons">
            <a
              href="https://open.spotify.com/episode/3VTzqMJNvw4VXKxdeGOmpJ?si=Tjho8pOIQYaSswgwU0TveA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-spotify"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.35 17.35a.748.748 0 01-1.03.25c-2.83-1.73-6.4-2.12-10.6-1.18a.75.75 0 11-.32-1.46c4.58-1.02 8.52-.58 11.68 1.36.35.21.47.66.27 1.03zm1.47-3.26a.94.94 0 01-1.3.31c-3.24-1.99-8.18-2.57-12-1.43a.94.94 0 11-.54-1.81c4.28-1.27 9.69-.63 13.38 1.62.45.27.6.86.31 1.31zm.13-3.34a1.13 1.13 0 01-1.56.37c-3.72-2.21-9.39-2.41-12.77-1.35a1.125 1.125 0 01-.66-2.16c3.9-1.2 10.07-.94 14.3 1.58.53.32.7 1.02.38 1.56z"/>
              </svg>
              在 Spotify 訂閱
            </a>
            <a
              href="https://www.youtube.com/@%E6%9E%95%E9%82%8A%E6%9B%B8%E8%81%B2/podcasts"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yt"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M23.498 6.186a2.99 2.99 0 00-2.106-2.116C19.2 3.5 12 3.5 12 3.5s-7.2 0-9.392.57A2.99 2.99 0 00.502 6.186 31.78 31.78 0 000 12a31.78 31.78 0 00.502 5.814 2.99 2.99 0 002.106 2.116C4.8 20.5 12 20.5 12 20.5s7.2 0 9.392-.57a2.99 2.99 0 002.106-2.116A31.78 31.78 0 0024 12a31.78 31.78 0 00-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z"/>
              </svg>
              在 YouTube 訂閱
            </a>
            <a
              href="https://www.instagram.com/midnightbookwhisper/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ig"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM18 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
              </svg>
              追蹤 Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Intro section with Spotify embed to explain the page and channel */}
      <section className="container" style={{ marginTop: 18 }}>
        <div className="card">
          <h2>🎧 了解本頁與頻道</h2>
          <p className="text-muted" style={{ marginTop: 6 }}>
            透過下方 Spotify 內嵌播放器，快速了解本頁內容與「講到你瞓着」Podcast 頻道的宗旨與風格。
          </p>
          <iframe
            title="Spotify introduction episode"
            data-testid="embed-iframe"
            style={{ borderRadius: 12, width: '100%', height: 352 }}
            src="https://open.spotify.com/embed/episode/4syEyJrc1H6gPOzB0QMtge?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      {/* About section below subscription buttons */}
      <section className="container" style={{ marginTop: 24 }}>
        <div className="card">
          {/* 16:9 banner image */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 9',
              borderRadius: 12,
              overflow: 'hidden',
              background: '#000',
            }}
          >
            <Image
              src="/images/about.png"
              alt="枕邊書聲 節目照片"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              style={{ objectFit: 'cover' }}
              priority={false}
            />
          </div>

          {/* Copy */}
          <div style={{ marginTop: 16 }}>
            <h2>🌙 關於我們</h2>
            <p>
              夜幕低垂，當你攤喺床上、抱住枕頭，耳邊傳來節奏緩慢、語氣單調、內容重複又欠互動的聲音——你已經進入
              <strong>「講到你瞓着」</strong> 嘅世界。
            </p>
            <p>
              呢個頻道專為渴望輕鬆入睡、遠離思緒紛擾的都市人而設。每一集透過沉悶與單一調子的內容，慢慢助你恰眼訓，讓腦袋自然放空，身心逐漸放鬆。
            </p>
          </div>
        </div>
      </section>

      <section className="container" style={{ marginTop: 20 }}>
        <div className="grid scenes">
          <SceneCard
            title="🌙 半夜失眠"
            description="幫你慢慢放低思緒，較易入睡。"
            posterSrc="/images/sleep.png"
            videoSrc="/videos/sleep.mp4"
          />
          <SceneCard
            title="🛌 輾轉反側"
            description="用沉悶聲音沖淡雜念，伴你進入睡鄉。"
            posterSrc="/images/commute.png"
            videoSrc="/videos/commute.mp4"
          />
          <SceneCard
            title="💤 腦袋太清醒時"
            description="重複聲音，催眠腦筋，一齊恰眼訓。"
            posterSrc="/images/alone.png"
            videoSrc="/videos/solitude.mp4"
          />
        </div>
      </section>

      <section className="container" style={{ marginTop: 20 }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <h2>立即收聽</h2>
          <p className="text-muted" style={{ marginTop: 6 }}>在你喜歡的平台訂閱「枕邊書聲」</p>

          <div className="cta-buttons" style={{ justifyContent: 'center' }}>
            <a
              href="https://open.spotify.com/show/0AW5ZbDhRLkKm9LI954EbF?si=f3966b6704fe4e27"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-spotify btn-shine"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.35 17.35a.748.748 0 01-1.03.25c-2.83-1.73-6.4-2.12-10.6-1.18a.75.75 0 11-.32-1.46c4.58-1.02 8.52-.58 11.68 1.36.35.21.47.66.27 1.03zm1.47-3.26a.94.94 0 01-1.3.31c-3.24-1.99-8.18-2.57-12-1.43a.94.94 0 11-.54-1.81c4.28-1.27 9.69-.63 13.38 1.62.45.27.6.86.31 1.31zm.13-3.34a1.13 1.13 0 01-1.56.37c-3.72-2.21-9.39-2.41-12.77-1.35a1.125 1.125 0 01-.66-2.16c3.9-1.2 10.07-.94 14.3 1.58.53.32.7 1.02.38 1.56z"/>
              </svg>
              在 Spotify 訂閱
            </a>


            <a
              href="https://www.youtube.com/@%E6%9E%95%E9%82%8A%E6%9B%B8%E8%81%B2/podcasts"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-yt btn-shine"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M23.498 6.186a2.99 2.99 0 00-2.106-2.116C19.2 3.5 12 3.5 12 3.5s-7.2 0-9.392.57A2.99 2.99 0 00.502 6.186 31.78 31.78 0 000 12a31.78 31.78 0 00.502 5.814 2.99 2.99 0 002.106 2.116C4.8 20.5 12 20.5 12 20.5s7.2 0 9.392-.57a2.99 2.99 0 002.106-2.116A31.78 31.78 0 0024 12a31.78 31.78 0 00-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z"/>
              </svg>
              在 YouTube 訂閱
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
