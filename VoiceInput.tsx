import { useState, FormEvent } from "react";

type Props = {
  onSend: (text: string) => void;
  connected: boolean;
};

export default function VoiceInput({ onSend, connected }: Props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const v = value.trim();
    if (!v) return;
    onSend(v);
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex items-center gap-2 bg-black/40 border border-flyerAccentSoft rounded-full px-4 py-2"
    >
      <input
        className="flex-1 bg-transparent outline-none text-sm"
        placeholder={
          connected
            ? "Flyer への指示や問いを静かに入力…"
            : "コアと接続中…"
        }
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!connected}
      />
      <button
        type="submit"
        disabled={!connected || !value.trim()}
        className="text-xs px-3 py-1 rounded-full border border-flyerAccent text-flyerAccent disabled:opacity-40 disabled:border-gray-600 disabled:text-gray-600 transition-colors"
      >
        Send
      </button>
    </form>
  );
}
