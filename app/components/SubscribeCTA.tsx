import { siteConfig } from '../siteConfig';
import { YouTubeIcon, SpotifyIcon } from './PlatformIcons';

export default function SubscribeCTA() {
  return (
    <div className="cta-buttons">
      <a className="btn btn-yt" href={siteConfig.platforms.youtube} target="_blank" rel="noreferrer noopener">
        <YouTubeIcon /> 在 YouTube Podcast 訂閱
      </a>
      <a className="btn btn-spotify" href={siteConfig.platforms.spotify} target="_blank" rel="noreferrer noopener">
        <SpotifyIcon /> 在 Spotify 訂閱
      </a>
      {/* Apple Podcasts button removed intentionally (no platform link) */}
    </div>
  );
}
