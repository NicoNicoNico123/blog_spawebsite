"use client";

import React, { useEffect, useRef } from "react";

const BACKGROUND_AUDIO_SRC = "/music/background-track.mp3";

export default function BackgroundAudio(): React.ReactElement {
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioElementRef.current;
    if (!audio) return;

    const tryPlayUnmutedThenFallback = async () => {
      try {
        audio.muted = false;
        audio.volume = 0.2;
        await audio.play();
      } catch {
        // If blocked, start muted (allowed by most browsers), then unmute on first gesture
        try {
          audio.muted = true;
          audio.volume = 0; // ensure silence
          await audio.play();
          const onFirstGesture = () => {
            audio.muted = false;
            audio.volume = 0.2;
            audio.play().catch(() => {});
            cleanupGestureListeners();
          };
          const cleanupGestureListeners = () => {
            window.removeEventListener("pointerdown", onFirstGesture);
            window.removeEventListener("click", onFirstGesture);
            window.removeEventListener("touchstart", onFirstGesture);
            window.removeEventListener("keydown", onFirstGesture);
          };
          window.addEventListener("pointerdown", onFirstGesture, { once: true });
          window.addEventListener("click", onFirstGesture, { once: true });
          window.addEventListener("touchstart", onFirstGesture, { once: true });
          window.addEventListener("keydown", onFirstGesture, { once: true });
        } catch {
          // If even muted fails, wait for first gesture to try again silently
          const onFirstGesture = () => {
            audio.muted = false;
            audio.volume = 0.2;
            audio.play().catch(() => {});
            cleanupGestureListeners();
          };
          const cleanupGestureListeners = () => {
            window.removeEventListener("pointerdown", onFirstGesture);
            window.removeEventListener("click", onFirstGesture);
            window.removeEventListener("touchstart", onFirstGesture);
            window.removeEventListener("keydown", onFirstGesture);
          };
          window.addEventListener("pointerdown", onFirstGesture, { once: true });
          window.addEventListener("click", onFirstGesture, { once: true });
          window.addEventListener("touchstart", onFirstGesture, { once: true });
          window.addEventListener("keydown", onFirstGesture, { once: true });
        }
      }
    };

    tryPlayUnmutedThenFallback();

    return () => {
      // Best-effort cleanup if listeners were attached
      window.removeEventListener("pointerdown", () => {});
      window.removeEventListener("click", () => {});
      window.removeEventListener("touchstart", () => {});
      window.removeEventListener("keydown", () => {});
    };
  }, []);

  return (
    <audio
      ref={audioElementRef}
      src={BACKGROUND_AUDIO_SRC}
      autoPlay
      muted
      loop
      preload="auto"
      playsInline
      aria-hidden
      // Keep it in the render tree; hide visually for better iOS compatibility
      style={{
        position: "fixed",
        width: 0,
        height: 0,
        opacity: 0,
        pointerEvents: "none",
        bottom: 0,
        right: 0,
      }}
    />
  );
}
