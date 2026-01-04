import { create } from "zustand";

type FlyerMessage = {
  content: string;
  meta?: any;
};

type State = {
  connected: boolean;
  lastMessage?: FlyerMessage;
  setConnected: (v: boolean) => void;
  setLastMessage: (m: FlyerMessage) => void;
};

export const useFlyerState = create<State>((set) => ({
  connected: false,
  lastMessage: undefined,
  setConnected: (v) => set({ connected: v }),
  setLastMessage: (m) => set({ lastMessage: m })
}));
