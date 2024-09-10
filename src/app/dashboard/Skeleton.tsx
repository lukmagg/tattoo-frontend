export default function Skeleton({ className }: { className: string }) {
  return (
    <div
      className={`bg-gray-400 motion-safe:animate-pulse rounded ${className}`}
    />
  );
}
