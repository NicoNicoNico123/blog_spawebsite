"use client";

export default function SceneCard({
  title,
  description,
  posterSrc,
  videoSrc,
}: {
  title: string;
  description: string;
  posterSrc: string;
  videoSrc?: string;
}) {
  return (
    <div className="card scene">
      <div className="scene-media">
        {videoSrc ? (
          <video className="scene-video" autoPlay muted loop playsInline poster={posterSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <img className="scene-image" src={posterSrc} alt={title} />
        )}
        <div className="scene-overlay" />
      </div>
      <div className="scene-text">
        <h3 className="scene-title">{title}</h3>
        <p className="scene-desc text-muted">{description}</p>
      </div>
    </div>
  );
}
