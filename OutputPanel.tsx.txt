type Props = {
  message: string;
  meta?: any;
};

export default function OutputPanel({ message, meta }: Props) {
  return (
    <div className="w-full bg-black/40 border border-flyerAccentSoft rounded-xl p-4 text-sm min-h-[72px]">
      <div className="text-xs text-flyerTextSoft mb-1">Flyer / Response</div>
      <div className="whitespace-pre-wrap leading-relaxed">
        {message || "まだ何も話していません。"}
      </div>
      {meta && (
        <div className="mt-3 text-[10px] text-flyerTextSoft">
          intent: {meta.intent} / decision: {JSON.stringify(meta.decision)}
        </div>
      )}
    </div>
  );
}
