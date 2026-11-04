export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <span className="h-px flex-1 bg-neutral-800" />
    </div>
  );
}