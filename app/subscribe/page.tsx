import SubscribeCTA from '../components/SubscribeCTA';

export default function SubscribePage() {
  return (
    <div className="card">
      <h1>選擇你的收聽平台</h1>
      <p className="text-muted">在你最熟悉的地方，遇見最溫柔的聲音。</p>
      <div style={{ height: 8 }} />
      <SubscribeCTA />
    </div>
  );
}
