// Metric tile (value over label) meant to live inside a <dl> grid.
export default function StatTile({
  value,
  label,
  align = "left",
  valueClassName = "text-2xl",
  labelClassName = "mt-1 text-xs leading-snug text-muted",
  className = "rounded-lg border border-line bg-elev p-4 shadow-sm",
}: {
  value: string;
  label: string;
  align?: "left" | "center";
  valueClassName?: string;
  labelClassName?: string;
  className?: string;
}) {
  return (
    <div className={`${className} ${align === "center" ? "text-center" : ""}`}>
      <dt className={`font-mono font-semibold text-accent ${valueClassName}`}>
        {value}
      </dt>
      <dd className={labelClassName}>{label}</dd>
    </div>
  );
}
