"use client";

import { useEffect, useRef, useCallback } from "react";
import { useFlyerState } from "@store/flyerState";

type FlyerMessage = {
  type: string;
  content: string;
  meta?: any;
};

export const useFlyerSocket = () => {
  const wsRef = useRef<WebSocket | null>(null);
  const { connected, setConnected, lastMessage, setLastMessage } =
    useFlyerState();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/ws");
    wsRef.current = ws;

    ws.onopen = () => {
      setConnected(true);
    };

    ws.onmessage = (event) => {
      try {
        const data: FlyerMessage = JSON.parse(event.data);
        if (data.type === "action") {
          setLastMessage({ content: data.content, meta: data.meta });
        }
      } catch {
        // ignore
      }
    };

    ws.onclose = () => {
      setConnected(false);
    };

    ws.onerror = () => {
      setConnected(false);
    };

    return () => {
      ws.close();
      wsRef.current = null;
    };
  }, [setConnected, setLastMessage]);

  const sendText = useCallback(
    (text: string) => {
      if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;
      wsRef.current.send(JSON.stringify({ type: "intent", content: text }));
    },
    []
  );

  return {
    connected,
    lastMessage,
    sendText
  };
};

