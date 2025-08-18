export default function ContactPage() {
  return (
    <div className="card">
      <h1>聯絡我們</h1>
      <p className="text-muted">歡迎來信交流合作或節目建議。</p>
      <div className="spacer" />
      <ul>
        <li>Email：<a href="mailto:hello@example.com">hello@example.com</a></li>
        <li>Instagram：<a href="https://instagram.com" target="_blank" rel="noreferrer noopener">@your.ig</a></li>
      </ul>
    </div>
  );
}
