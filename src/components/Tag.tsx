export default function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 px-2.5 py-1 text-xs text-white/80">
      {label}
    </span>
  );
}
