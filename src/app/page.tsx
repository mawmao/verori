
export default function Home() {
  return (
    <main className="h-screen flex flex-col flex-1 items-center justify-center bg-black font-sans">
      <div className="flex flex-col gap-4 items-start text-left">
        <h1 className="max-w-xs text-5xl font-semibold leading-10 tracking-tight text-zinc-50">
          Verori
        </h1>
        <p className="max-w-[45ch] text-lg leading-8 text-zinc-400">
          A client-approval portal that tracks every deliverable through timestamped records of when it was sent, viewed, approved, or left unanswered.
        </p>
      </div>
    </main>
  );
}
