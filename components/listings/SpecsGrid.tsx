interface Props {
  items: Array<{ label: string; value: string }>;
}

export default function SpecsGrid({ items }: Props) {
  return (
    <div className="mb-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-gray-200 bg-gray-200">
      {items.map((item) => (
        <div key={item.label} className="bg-white px-[14px] py-3">
          <div className="mb-0.5 text-[11px] font-semibold uppercase tracking-[0.6px] text-gray-400">{item.label}</div>
          <div className="text-sm font-semibold text-gray-800">{item.value}</div>
        </div>
      ))}
    </div>
  );
}
