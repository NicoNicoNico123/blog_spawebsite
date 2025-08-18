import { siteConfig } from '../siteConfig';
import { YouTubeIcon, SpotifyIcon, ApplePodcastsIcon } from './PlatformIcons';

export default function SubscribeCTA() {
  return (
    <div className="cta-buttons">
      <a className="btn btn-yt" href={siteConfig.platforms.youtube} target="_blank" rel="noreferrer noopener">
        <YouTubeIcon /> 在 YouTube Podcast 訂閱
      </a>
      <a className="btn btn-spotify" href={siteConfig.platforms.spotify} target="_blank" rel="noreferrer noopener">
        <SpotifyIcon /> 在 Spotify 訂閱
      </a>
      <a className="btn btn-apple" href={siteConfig.platforms.apple} target="_blank" rel="noreferrer noopener">
        <ApplePodcastsIcon /> 在 Apple Podcast 訂閱
      </a>
    </div>
  );
}
