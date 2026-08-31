import { useEffect, useMemo, useRef, useState } from "react";
import { Pause, Play, RotateCcw, Square } from "lucide-react";

type ListenStatus = "idle" | "playing" | "paused" | "unsupported";

type ArticleListenControlsProps = {
  title: string;
  readTime: string;
  sections: string[];
};

function normalizeSpeechText(value: string) {
  return value
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export function ArticleListenControls({
  title,
  readTime,
  sections,
}: ArticleListenControlsProps) {
  const [status, setStatus] = useState<ListenStatus>("idle");
  const [currentChunk, setCurrentChunk] = useState(0);
  const chunks = useMemo(
    () => [title, ...sections].map(normalizeSpeechText).filter(Boolean),
    [sections, title]
  );

  const chunksRef = useRef(chunks);
  const stoppedRef = useRef(false);
  const statusRef = useRef<ListenStatus>("idle");
  const currentChunkRef = useRef(0);

  useEffect(() => {
    chunksRef.current = chunks;
  }, [chunks]);

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  useEffect(() => {
    const isSupported =
      typeof window !== "undefined" &&
      "speechSynthesis" in window &&
      typeof window.SpeechSynthesisUtterance !== "undefined";

    if (!isSupported) {
      setStatus("unsupported");
    }

    return () => {
      if (statusRef.current === "playing" || statusRef.current === "paused") {
        stoppedRef.current = true;
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function speakFrom(index: number) {
    const speech = window.speechSynthesis;
    const nextText = chunksRef.current[index];

    if (!nextText) {
      setStatus("idle");
      setCurrentChunk(0);
      currentChunkRef.current = 0;
      return;
    }

    const utterance = new window.SpeechSynthesisUtterance(nextText);
    utterance.rate = 0.95;
    utterance.pitch = 1;

    utterance.onend = () => {
      if (stoppedRef.current) return;

      const nextIndex = index + 1;
      currentChunkRef.current = nextIndex;
      speakFrom(nextIndex);
    };

    utterance.onerror = () => {
      if (!stoppedRef.current) {
        setStatus("idle");
        setCurrentChunk(0);
      }
    };

    currentChunkRef.current = index;
    setCurrentChunk(index + 1);
    setStatus("playing");
    speech.speak(utterance);
  }

  function startListening() {
    if (status === "unsupported") return;

    stoppedRef.current = true;
    window.speechSynthesis.cancel();

    window.setTimeout(() => {
      stoppedRef.current = false;
      speakFrom(0);
    }, 0);
  }

  function pauseListening() {
    if (status !== "playing") return;

    window.speechSynthesis.pause();
    setStatus("paused");
  }

  function resumeListening() {
    if (status !== "paused") return;

    window.speechSynthesis.resume();
    setStatus("playing");
  }

  function stopListening() {
    stoppedRef.current = true;
    window.speechSynthesis.cancel();
    currentChunkRef.current = 0;
    setCurrentChunk(0);
    setStatus("idle");
  }

  const progress =
    status === "playing" || status === "paused"
      ? `${Math.min(currentChunk, chunks.length)} / ${chunks.length}`
      : readTime;

  if (status === "unsupported") {
    return (
      <p className="border border-foreground/10 px-4 py-3 font-display text-sm tracking-wide text-foreground/40">
        Listen unavailable in this browser
      </p>
    );
  }

  return (
    <div
      className="flex flex-wrap items-center gap-2 border border-foreground/10 bg-background/25 p-2"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        onClick={status === "paused" ? resumeListening : startListening}
        disabled={status === "playing"}
        className="inline-flex items-center gap-2 border border-brand/30 px-3 py-2 font-display text-sm tracking-wide text-brand/80 transition-colors hover:bg-brand/10 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:cursor-not-allowed disabled:opacity-35"
        aria-label={
          status === "paused" ? "Resume article audio" : "Listen to this article"
        }
      >
        <Play className="size-4" aria-hidden="true" />
        {status === "paused" ? "Resume" : "Listen"}
      </button>

      <button
        type="button"
        onClick={pauseListening}
        disabled={status !== "playing"}
        className="inline-flex items-center gap-2 border border-foreground/15 px-3 py-2 font-display text-sm tracking-wide text-foreground/50 transition-colors hover:border-foreground/30 hover:text-foreground/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:cursor-not-allowed disabled:opacity-35"
        aria-label="Pause article audio"
      >
        <Pause className="size-4" aria-hidden="true" />
        Pause
      </button>

      <button
        type="button"
        onClick={stopListening}
        disabled={status === "idle"}
        className="inline-flex items-center gap-2 border border-foreground/15 px-3 py-2 font-display text-sm tracking-wide text-foreground/50 transition-colors hover:border-foreground/30 hover:text-foreground/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:cursor-not-allowed disabled:opacity-35"
        aria-label="Stop article audio"
      >
        <Square className="size-4" aria-hidden="true" />
        Stop
      </button>

      <button
        type="button"
        onClick={startListening}
        disabled={status === "idle"}
        className="inline-flex items-center gap-2 border border-foreground/15 px-3 py-2 font-display text-sm tracking-wide text-foreground/50 transition-colors hover:border-foreground/30 hover:text-foreground/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:cursor-not-allowed disabled:opacity-35"
        aria-label="Restart article audio"
        title="Restart"
      >
        <RotateCcw className="size-4" aria-hidden="true" />
        <span className="sr-only">Restart</span>
      </button>

      <span
        className="px-2 font-display text-xs uppercase tracking-[0.2em] text-foreground/35"
        aria-live="polite"
      >
        {status === "playing"
          ? `Reading ${progress}`
          : status === "paused"
            ? `Paused ${progress}`
            : `Audio ${progress}`}
      </span>
    </div>
  );
}
