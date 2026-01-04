"use client";

import CoreRing from "@components/CoreRing";
import VoiceInput from "@components/VoiceInput";
import OutputPanel from "@components/OutputPanel";
import { useFlyerSocket } from "@hooks/useFlyerSocket";

export default function Page() {
  const { connected, lastMessage, sendText } = useFlyerSocket();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="flex flex-col items-center gap-8 max-w-xl w-full">
        <CoreRing connected={connected} />

        <OutputPanel
          message={lastMessage?.content ?? ""}
          meta={lastMessage?.meta}
        />

        <VoiceInput onSend={sendText} connected={connected} />

        <div className="text-xs text-flyerTextSoft mt-4">
          Flyer OS – 静か × 精密 × ミニマル
        </div>
      </div>
    </main>
  );
}

