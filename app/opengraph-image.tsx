import { ImageResponse } from 'next/og';
import { siteConfig } from './siteConfig';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          background: 'linear-gradient(135deg, #0a0d1c 0%, #1b2040 100%)',
          color: 'white',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            marginBottom: 18,
            background: 'linear-gradient(90deg, #fff, #c6d2ff 30%, #ffd6a6 60%, #fff)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 32, opacity: 0.9, maxWidth: 920 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
