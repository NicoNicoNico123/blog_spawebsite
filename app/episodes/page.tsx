import fs from 'node:fs/promises';
import path from 'node:path';

interface EpisodeItem {
  id: string;
  title: string;
  description?: string;
  audioUrl: string;
  duration?: string | null;
  publishedAt?: string | null;
}

async function getEpisodes(): Promise<EpisodeItem[]> {
  const audioDir = path.join(process.cwd(), 'public', 'audio', '01');
  // Return empty if folder doesn't exist (e.g., local dev without assets)
  try {
    await fs.access(audioDir);
  } catch {
    return [];
  }
  const files = await fs.readdir(audioDir).catch(() => [] as string[]);
  const mp3s = files.filter(f => f.toLowerCase().endsWith('.mp3'));
  return mp3s.map((file, index) => ({
    id: `01-${String(index + 1).padStart(3, '0')}`,
    title: `Episode ${index + 1}`,
    description: '自動掃描的音頻檔案',
    audioUrl: `/audio/01/${file}`,
  }));
}

export default async function EpisodesPage() {
  const episodes = await getEpisodes();
  return (
    <div>
      <h1>節目列表</h1>
      <div className="grid">
        {episodes.map(ep => (
          <div className="card episode" key={ep.id}>
            <div className="meta">
              <h3>{ep.title}</h3>
              <p className="text-muted">{ep.description}</p>
              <audio controls preload="metadata" src={ep.audioUrl}></audio>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
